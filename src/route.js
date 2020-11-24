import uuid from 'uuid/v4';
import multer from 'multer';

import Upload from '../controllers/upload';

import config from '../config';

module.exports = api => {
	api.route('/upload').post(multer().single('image'), Upload.create);
};