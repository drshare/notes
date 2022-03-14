const { writeCatalogue, removeFile, GUIDE_PATH } = require('../utils');

removeFile(GUIDE_PATH, ['index', 'readme', 'README']);
writeCatalogue(GUIDE_PATH, 3);
