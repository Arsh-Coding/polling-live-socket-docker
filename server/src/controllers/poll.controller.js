const Poll = require("../models/Poll");
const Question = require("../models/Question");

exports.createPoll = async (req, res) => {
  try {

    const {
      title,
      description,
      isAnonymous,
      expiresAt,
      questions
    } = req.body;

    const poll = await Poll.create({
      title,
      description,
      isAnonymous,
      expiresAt,
      creatorId: req.user.userId
    });

    const questionDocs = questions.map(
      (question) => ({
        pollId: poll._id,
        questionText: question.questionText,
        required: question.required,
        options: question.options
      })
    );

    await Question.insertMany(
      questionDocs
    );

    return res.status(201).json({
      success: true,
      poll
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message
    });

  }
};

exports.getMyPolls = async (req, res) => {
  try {

    const polls = await Poll.find({
      creatorId: req.user.userId
    });

    return res.json({
      success: true,
      polls
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message
    });

  }
};

exports.getPollById = async (
  req,
  res
) => {
    
  try {

    const { pollId } = req.params;

    const poll = await Poll.findById(
      pollId
    );

    if (!poll) {
      return res.status(404).json({
        message: "Poll not found"
      });
    }

    const questions =
      await Question.find({
        pollId
      });

    return res.json({
      poll,
      questions
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message
    });

  }
};

exports.publishPoll = async (
  req,
  res
) => {

  try {

    const { pollId } = req.params;

    const poll =
      await Poll.findByIdAndUpdate(
        pollId,
        {
          isPublished: true
        },
        {
          new: true
        }
      );

    return res.json({
      success: true,
      poll
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message
    });

  }
};