import convict from 'convict'

const config = convict({
  env: {
    doc: 'Environment',
    format: ['prod', 'dev', 'test', 'local'],
    default: 'local',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'Server port',
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
  dbUrl: {
    doc: 'Database url',
    format: '*',
    default: 'mongodb://localhost:27017/test',
    env: 'DB_URL',
  }
});

const env = config.get('env');
config.validate({allowed: 'strict'});

export default config;