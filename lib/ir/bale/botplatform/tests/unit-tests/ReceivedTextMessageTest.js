"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReceivedMessage_1 = require("../../models/serverMessages/ReceivedMessage");
var expect = require('chai').expect;
describe('ReceivedTextMessage', function () {
    let correctFatSeq = {
        "$type": "FatSeqUpdate",
        "seq": 241,
        "body": {
            "$type": "Message",
            "peer": {
                "$type": "User",
                "id": 1472433338,
                "accessHash": "4475107066909916083"
            },
            "sender": {
                "$type": "User",
                "id": 1472433338,
                "accessHash": "4475107066909916083"
            },
            "date": "1472887337280",
            "randomId": "-6066865252084846679",
            "message": {
                "$type": "Text",
                "text": "MyMessage"
            }
        }
    };
    it("It should return correct received text object from server", function () {
        let RecTxtMsg = new ReceivedMessage_1.ReceivedMessage(JSON.stringify(correctFatSeq));
        expect(RecTxtMsg.seq).to.equal(correctFatSeq.seq);
        expect(RecTxtMsg.peer.id).to.equal(correctFatSeq.body.peer.id);
        expect(RecTxtMsg.peer.accessHash).to.equal(correctFatSeq.body.peer.accessHash);
        expect(RecTxtMsg.sender.id).to.equal(correctFatSeq.body.sender.id);
        expect(RecTxtMsg.sender.accessHash).to.equal(correctFatSeq.body.sender.accessHash);
        expect(RecTxtMsg.date).to.equal(correctFatSeq.body.date);
        expect(RecTxtMsg.randomId).to.equal(correctFatSeq.body.randomId);
        expect(RecTxtMsg.message.text).to.equal(correctFatSeq.body.message.text);
    });
});
//# sourceMappingURL=ReceivedTextMessageTest.js.map