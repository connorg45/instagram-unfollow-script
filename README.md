# Instagram Unfollow Script
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This is a JavaScript program to see all of the people who are not following you back 😄🤣.

## Installation

Before running the script, ensure you have [Node.js](https://nodejs.org/) installed.

## Usage

1. Open Instagram on iPhone.
2. Go to your profile (click bottom right to go to your account).
3. Press the top right horizontal lines.
4. Go to "Your Activity."
5. Scroll down to the bottom and hit "Download your information."
6. Press "Request a download."
7. Choose "Select types of information."
8. Select "Followers and following" and then press next at the bottom.
9. Input a email of your choice and choose the format "JSON", set the date range to "All time."
10. You should recieve an email shortly.
11. Next go to your personal machine and open the new email from Instagram.
12. Click "Download your information", click download and then input your password.
13. Open the zip file and then drag the folder "followers_and_following" to your desktop.
14. Now clone this repo to your local machine.
15. Open "instagram-unfollow-script" in Visual Studio Code.
16. Drag "followers_and_following" into this project and click "copy folder."

Your file structure should look like this now:

![File Structure](/assets/images/folder-structure.png)

In the `script.js` file, ensure that the names of the JSON files `followers_1.json` and `following.json` exactly match the names of the JSON files in your `followers_and_following` folder. The program will not work correctly if the names do not match. See the reference images below:

![Matching JSON name in folder](/assets/images/folder-json-name.png)

![Matching JSON name in script.js](/assets/images/script-json-name.png)

If the JSON file names in your `script.js` do not match the names of the JSON files in your `followers_and_following` folder, make sure to change them accordingly so that the program works as intended.

17. Click "Terminal" at the top of Visual Studio Code and select "New Terminal."
18. Make sure you are in /instagram-unfollow-script.
19. Type the following command into the console:

    ```bash
    node script.js
    ```

20. You should see all of the people who are not following you back in the terminal now 😄.

## License

This project is licensed under the MIT license.

## Questions and Support

If you have any questions about the repo or need support, please [open an issue](https://github.com/connorg45/instagram-unfollow-script/issues) or contact me directly at 99grogan@gmail.com.

You can find more of my work at [connorg45](https://github.com/connorg45/).
