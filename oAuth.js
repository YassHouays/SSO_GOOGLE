var id = {
    google: {
        GOOGLEclientID: process.env.GOOGLECLIENTID,
        GOOGLEclientSecret: process.env.GOOGLECLIENTSECRET,
        GOOGLEcallbackURL: process.env.GOOGLECALLBACKURL
    },
    facebook: {
        FACEBOOKclientID: process.env.FACEBOOKCLIENTID,
        FACEBOOKclientSecret: process.env.FACEBOOKCLIENTSECRET,
        FACEBOOKcallbackURL: process.env.FACEBOOKCALLBACKURL
    }
};

module.exports = id;
