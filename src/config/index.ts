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
  mongoUrl: {
    doc: 'Database url',
    format: '*',
    default: 'mongodb://localhost:27017/test',
    env: 'DB_URL',
  },
  github: {
    clientId: {
      doc: 'github client id',
      format: '*',
      env: 'GITHUB_CLIENT_ID',
    },
    clientSecret: {
      doc: 'github client secret',
      format: '*',
      env: 'GITHUB_CLIENT_SECRET'
    }
  }
});

const env = config.get('env');
config.validate({allowed: 'strict'});

export default config;