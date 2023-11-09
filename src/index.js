const core = require("@actions/core");
const gh = require("@actions/github");

(
    async () => {
        try {
            core.notice("balls");
        } catch (error) {
            core.setFailed(error.message);
        }
    }
)();