module.exports = function (api) {
    api.forever();
    return {
      plugins: ['macros'],
    }
  }