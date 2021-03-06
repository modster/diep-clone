class collisionServer {
    constructor(config, serverManager) {
        this.config = config;
        this.serverManager = serverManager;
        this.status = 'off';
    }

    init() {
        this.status = 'launching';
        this.status = 'on';
        console.log('[\x1b[36mConsole\x1b[0m] collisionServer Launched');
    }

    shutdown() {
        this.status = 'closing';
        this.status = 'off';
        console.log('[\x1b[36mConsole\x1b[0m] childManager Closed');
    }
};

module.exports = collisionServer;
