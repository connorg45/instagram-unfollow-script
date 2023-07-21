const fs = require('fs');

// Load followers and following JSON data
const followers = JSON.parse(fs.readFileSync('./followers_and_following/followers_1.json'));
const following = JSON.parse(fs.readFileSync('./followers_and_following/following.json'));


// Extract the usernames from the JSON data
const followersUsernames = followers.map((follower) => follower.string_list_data[0].value);
const followingUsernames = following.relationships_following.map((following) => following.string_list_data[0].value);

// Find people who are not following back
const notFollowingBack = followingUsernames.filter((followingUsername) => !followersUsernames.includes(followingUsername));

// Log the number of people who are not following back
console.log(`Number of people who are not following you back: ${notFollowingBack.length}`);

// Log the usernames of people who are not following back
console.log('\nPeople who are not following you back:');
console.log(notFollowingBack.sort().map((username) => `- ${username}`).join('\n'));