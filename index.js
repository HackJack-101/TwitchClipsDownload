console.log('[TCD]: index.js loaded');

function addDownloadButton(uri) {
    if (uri === '')
        return;

    if (uri.substr(-8) === '-360.mp4')
        return;


    console.log('[TCD]: addDownloadButton');
    console.log(`[TCD]: URI detected ${uri}`);

    if (document.querySelectorAll('div.clips-sidebar > div.tw-border-t > div').length > 0) {
        console.log('[TCD]: Full page');
        let buttonBar = document.querySelector('div.clips-sidebar > div.tw-border-t > div');
        let dwnlButton;
        if (document.getElementById('downloadTwitchClip') === null) {
            dwnlButton = document.createElement('div');
            dwnlButton.style.marginLeft = "2em";
            dwnlButton.setAttribute('class', 'tw-inline-block');
            dwnlButton.innerHTML = `<a href="${uri}" download target="_blank" class="tw-button" id="downloadTwitchClip"><span class="tw-button__text" data-a-target="tw-button-text">Download</span></a>`;
            buttonBar.appendChild(dwnlButton);
        } else {
            dwnlButton = document.getElementById('downloadTwitchClip');
            dwnlButton.setAttribute('href', uri);
        }
    }

    // player display
    let playerButtonBar = document.querySelector('div.player-buttons-right');
    let playerDwnlButton;
    if (document.getElementById('downloadTwitchClipPlayer') === null) {
        playerDwnlButton = document.createElement('div');
        playerDwnlButton.style.display = "flex";
        playerDwnlButton.style.flexDirection = "column";
        playerDwnlButton.style.justifyContent = "center";
        playerDwnlButton.innerHTML = `<a href="${uri}" download target="_blank" id="downloadTwitchClipPlayer"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 471.2 471.2" style="enable-background:new 0 0 471.2 471.2;" xml:space="preserve" width="30px" height="25px"><g><g><path d="M457.7,230.15c-7.5,0-13.5,6-13.5,13.5v122.8c0,33.4-27.2,60.5-60.5,60.5H87.5c-33.4,0-60.5-27.2-60.5-60.5v-124.8    c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v124.8c0,48.3,39.3,87.5,87.5,87.5h296.2c48.3,0,87.5-39.3,87.5-87.5v-122.8    C471.2,236.25,465.2,230.15,457.7,230.15z" fill="#FFFFFF"/>		<path d="M226.1,346.75c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-62.7,62.8    V30.75c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v273.9l-62.8-62.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1    L226.1,346.75z" fill="#FFFFFF"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></a>`;
        playerButtonBar.appendChild(playerDwnlButton);
    } else {
        playerDwnlButton = document.getElementById('downloadTwitchClipPlayer');
        playerDwnlButton.setAttribute('href', uri);
    }
}

const bodyObserver = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if (document.querySelectorAll('video').length > 0) {
                let video = document.querySelector('video');
                addDownloadButton(video.src);

                const videoObserver = new MutationObserver((mutationsList) => {
                    for (let mutation of mutationsList) {
                        if (mutation.type === 'attributes') {
                            addDownloadButton(video.src);
                        }
                    }
                });
                videoObserver.observe(video, {attributes: true});

                bodyObserver.disconnect();
            }
        }
    }
});
bodyObserver.observe(document.body, {childList: true});
