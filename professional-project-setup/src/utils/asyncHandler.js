const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next)
  } catch (error) {
    res.status(error.code || 500).json({
      status: 'error',
      message: error.message
    })
  }
}
