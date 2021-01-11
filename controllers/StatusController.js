const Status = require('../models/status')

exports.getAll = (req, res) => {
    Status.getAll().then(
        function(allStatuses) {
            res.json(allStatuses);
        }
    );
};

exports.get = (req, res) => {
    Status.get(req.params.id).then(
        function(State) {
            res.send(State.attributes.state);
        }
    );
};
