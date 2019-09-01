// const MODE = 'devlopment';
const MODE = 'production';
const VERSION = 'V0.0.1';
const PRODUCTION_PREFIX  = 'https://www.jevescript.com/api/liuyinshe';
const DEVELOPMENT_PREFIX = 'http://localhost:3000/api/liuyinshe';
const PREFIX =  ( MODE === 'production' ) ? PRODUCTION_PREFIX : DEVELOPMENT_PREFIX;

const API = {
  mode: MODE,
  version: VERSION,
  login: PREFIX + '/wxlogin',
  updateUserInfo: (id) => PREFIX + '/user/' + id,
  getUserLessons: (user_id, class_id) => PREFIX + '/user/' + user_id + '/' + class_id,
  getUserClasses: (user_id) => PREFIX + '/user_class/' + user_id,
  askLeave: PREFIX + '/ask_leave',
}

export default API;


