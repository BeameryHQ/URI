const fs = require('fs')
const path = require("path");

const isValidURI = require('../isValidURI/index');
const getDomainName = require('../getDomainName')
const globalTrackers = require('./data/globalTrackers')
const globalTrackersOptional = require('./data/globalTrackersOptional')

/**
 * @function removeURLTracking
 * @description 
 *
 * @param  {String}  url the URL address we wish to strip tracking from
 * @return {String} strippedUrl the URL address after tracker stripping
 */

const removeURLTracking = (url, safeRemoval=true) => {

  if (!!url && isValidURI(url)) {

    // Block all defined global trackers
    var trackersToBlock = [...globalTrackers];
    
    // Block all optional global trackers if unsafe removal requested
    if (!safeRemoval) trackersToBlock.push(...globalTrackersOptional);

    // Block all domain specific trackers if that domain file exists in domainTrackers folder
    var domainName = getDomainName(url);

    if (fs.existsSync(path.resolve(__dirname, `./data/domainTrackers/${domainName}.js`))) {
      const domainSpecificTrackers = require(path.resolve(__dirname, `./data/domainTrackers/${domainName}`));
      trackersToBlock.push(...domainSpecificTrackers);
    }

    // Build regex string separated by pipe (OR)
    var regexString = `([?&](${trackersToBlock.join('|')})=[^&#?]*)`;

    // Replace all matched trackers
    var strippedUrl = url.replaceAll(regexString, '');
    
    return strippedUrl;
  }

  return false;
};

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

module.exports = removeURLTracking;