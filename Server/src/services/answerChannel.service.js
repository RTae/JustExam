const { channel } = require('../models/db');
const db = require('../models/db');

const {
  answerQuestionScore,
  questionExamChannel,
  questionAnswerCChannel,
  questionAnswerMCChannel,
  questionAnswerMChannel,
  questionAnswerSAChannel,
  questionAnswerTFChannel,
  sectionExamTimeChannel,
} = db;

const medthods = {

  async updateMany(Points, transaction) {
    return Promise.all(Points.map((point) => medthods.updateOne(point.aqsid, point.pointReceive, transaction)));
  },

  async getQuestionAndAnswer(cid, mid) {
    return questionExamChannel.findAll(
      {
        include: [
          { model: questionAnswerCChannel },
          { model: questionAnswerMCChannel },
          { model: questionAnswerMChannel },
          { model: questionAnswerSAChannel },
          { model: questionAnswerTFChannel },
          {
            model: answerQuestionScore,
            where: {
              mid,
            },
          },
          {
            model: channel,
            attributes: [],
            where: { cid },
            required: true,
          },

        ],
      },
    );
  },

  async updateOne(aqsid, pointReceive, transaction) {
    return answerQuestionScore.update({
      pointReceive,
    }, {
      where: { aqsid },
    }, { transaction });
  },

};

module.exports = {
  ...medthods,
};
