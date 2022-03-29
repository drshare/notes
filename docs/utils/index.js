const fs = require('fs-extra');
const process = require('process');
const path = require('path');
const { throwError } = require('./error.js');

const ROOT_PATH = path.join(__dirname, '../../'); // 根目录
const CWD = process.cwd(); // 命令执行目录
const DOCK_PATH = path.resolve(ROOT_PATH, 'docs'); // docs 目录
const GUIDE_PATH = path.resolve(DOCK_PATH, 'guide'); // guide 目录
// 获取target目录结构
function getDirTree(target, filter) {
    try {
        /** 参数校验 start */

        // 当前目录不是文件夹抛出错误
        if (!fs.statSync(target).isDirectory()) {
            throw({
                msg: '不存在docs目录'
            });
        }
        // fiter 是一个函数
        if (filter && typeof filter !== 'function') {
            throw({
                msg: 'filter 必须是一个函数'
            });
        }

        /** 参数校验 end */

        // 最终输出的结果
        let outputTree = [];

        // 获取目录信息 (返回一个文件/目录 名称数组)
        const dirInfo = fs.readdirSync(target);
        // 空目录校验
        if (!Array.isArray(dirInfo) || !dirInfo.length) return outputTree;

        /** 生成目录的描述
         * name 名称
         * path 路径
         * type 文件/目录
         * extension 后缀
         */
         outputTree = dirInfo.reduce((total, dirItem) => {
            const extension = '.md';
            const name = dirItem.replace(extension, '');
            // 过滤不需要的文件
            if (filter && !filter(name)) return total;

            const currentPath = path.resolve(target, dirItem);
            const stat = fs.statSync(currentPath);
            const detail = {
                name,
                path: currentPath,
                type: '',
                extension
            }
            if (stat.isFile()) {
                detail.type = 'file';
            } else if (stat.isDirectory()) {
                detail.type = 'dir';
                detail.children = getDirTree(currentPath);
            }
            total.push(detail);
            return total;
        }, []);
        return outputTree;
    } catch (error) {
        console.error(error)
        return [];
    }
}

/**
 * 生成目录markdown文本 并且写入目录信息
 * @param {*} target 读取的目录
 * @param {*} level 写入readme 的层级
 * @returns 
 */
function writeCatalogue(target, level = 1, currentLevel = 1) {
    /**  参数校验 start */
    if (!target) {
        throw({
            msg: 'target is not get'
        })
    }
    /**  参数校验 end */

    let catalogueArr = []; // 最终输出的结果
    let targetPath = ''; // 目标的 路径/path
    let targetDirInfo = []; // 目标的 目录信息
    const deepLevel = currentLevel - level; // 目标深入的层数

    if (typeof target === 'string') {
        targetPath = target;
        targetDirInfo = getDirTree(target, (dirItem) => !['index', 'readme', 'README'].includes(dirItem.name));
    } else if (Array.isArray(target) && target.length) {
        targetDirInfo = target;
    } else if (target?.children) {
        targetPath = target.path;
        targetDirInfo = target.children;
    }

    if (!Array.isArray(targetDirInfo) || !Array.length) return catalogueStr;

    catalogueArr = targetDirInfo.reduce((total, current) => {
        const pathStart = deepLevel >= 0 ? `./${current.name}` : '';
        const nameStart = deepLevel > 0 ?  '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(deepLevel) : '';
        // 过滤文件或者是 目录
        if (['README', 'readme', 'index'].includes(current.name)) {
            fs.removeSync(current.path);
        }
        if (current.name && current.type === 'file' && !['index', 'README', 'readme'].includes(current.name)) {
            total.push({
                deepLevel,
                name: `${current.name}`,
                path: `./${path.relative(targetPath, current.path)}`
            });
        } else if (current.type === 'dir'){
            total.push(`${nameStart}${current.name}`)
            if (!current?.children) return total;
            if (Array.isArray(current.children) && current.children.length && !current.children.filter(iten => ['index', 'README', 'readme'].includes(current.name))) {
                fs.emptyDirSync(current.path);
            }
            const children = writeCatalogue(current, level, currentLevel + 1);
            total = total.concat(children.map(child => {
                if (typeof child === 'object' && child?.path) {
                    child.path = `${pathStart}${child.path.replace('./', '/')}`
                }
                return child;
            }));
        }
        return total;
    }, []);

    if (!catalogueArr.length || currentLevel < level) return [];
    if (level === currentLevel) {
        catalogueStr = catalogueArr.map(item => {
            if (typeof item === 'object') {
                const nameStart = item.deepLevel > 0 ?  '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(item.deepLevel) : '';
                return `${nameStart}[${item.name}](${item.path})`
            }
            return item;
        }).join('  \n');
        const cataloguePath = path.resolve(targetPath, 'index.md');
        fs.ensureFileSync(cataloguePath);
        fs.writeFileSync(cataloguePath, catalogueStr);
    }
 
    return catalogueArr;
}

// 写入目录结构信息信息
function writeDirInfo(target) {
    const DATA_NAME = path.relative(GUIDE_PATH, target).replace('/', '-');
    const TARGET_DATA_PATH = path.resolve(DOCK_PATH, `data/${DATA_NAME}.json`); // guide 目录
    const guideDirInfo = getDirTree(target, (dirItem) => {
        !['index', 'readme', 'README'].includes(dirItem.name);
    });
    fs.ensureFileSync(TARGET_DATA_PATH);
    fs.writeJsonSync(TARGET_DATA_PATH, guideDirInfo);
}

// 删除文件
function removeFile(target, fileNameArr) {
    try {
        /** 参数校验 start  */
        if (!target) {
            throw({
                msg: 'target is not get!'
            })
        }
        if (!fileNameArr || !Array.isArray(fileNameArr) || !fileNameArr.length) {
            throw({
                msg: 'fileNameArr is not get!'
            }) 
        }
        /** 参数校验 end  */

        let targetDirInfo = [];
        if (typeof target === 'string') {
            targetDirInfo = getDirTree(target, (dirItem) => !fileNameArr.includes(dirItem.name));
        } else if (Array.isArray(target) && target.length) {
            targetDirInfo = target;
        }

        targetDirInfo.forEach(item => {
            if (item.type === 'file') {
                if (fileNameArr.includes(item.name)) {
                    fs.removeSync(item.path);
                }
            } else {
                if (Array.isArray(item.children)) {
                    !item.children.length ? fs.emptyDirSync(item.path) : removeFile(item.children, fileNameArr);
                }
            }
        })
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getDirTree,
    writeCatalogue,
    writeDirInfo,
    removeFile,
    DOCK_PATH,
    GUIDE_PATH,
    CWD
}
