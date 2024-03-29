const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromHTTP(dateObj)
            .setLocale("es")
            .toFormat("DDD");
       });

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy({ "node_modules/bootstrap/dist": "assets/bootstrap" });
    eleventyConfig.addPassthroughCopy({ "node_modules/shikwasa/dist": "assets/shikwasa" });
    eleventyConfig.addWatchTarget("./_sass/");
    eleventyConfig.addFilter("debugger", (...args) => {
        console.log(...args)
        debugger;
    });
    // eleventyConfig.on('eleventy.after', async ({ dir, results, runMode, outputMode }) => {
    //     eleventyConfig.addPassthroughCopy({ "pages/*": "episodios/" });
    // });
};