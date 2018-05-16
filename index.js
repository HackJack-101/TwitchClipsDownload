setTimeout(() => {
    let dwnlButton;
    if (document.getElementById('downloadTwitchClip') === null) {
        dwnlButton = document.getElementById('downloadTwitchClip');
        dwnlButton.setAttribute('href', '#');
        dwnlButton.setAttribute('target', '_blank');
        dwnlButton.setAttribute('class', 'tw-button tw-button--disabled');
        dwnlButton.setAttribute('disabled', 'disabled');
        dwnlButton.removeAttribute('download');
    }
}, 0);

setTimeout(() => {
    let video = document.querySelector('video');
    let clip = video.currentSrc;
    let buttonBar = document.querySelector('div.clips-sidebar > div.tw-border-t > div');

    if (clip !== '') {
        let dwnlButton;
        if (document.getElementById('downloadTwitchClip') === null) {
            dwnlButton = document.createElement('div');
            dwnlButton.style.marginLeft = "2em";
            dwnlButton.setAttribute('class', 'tw-inline-block');
            dwnlButton.innerHTML = `<a href="${clip}" download target="_blank" class="tw-button" id="downloadTwitchClip"><span class="tw-button__text" data-a-target="tw-button-text">Download</span></a>`;
            buttonBar.appendChild(dwnlButton);
        } else {
            dwnlButton = document.getElementById('downloadTwitchClip');
            dwnlButton.setAttribute('href', clip);
            dwnlButton.setAttribute('class', 'tw-button');
            dwnlButton.setAttribute('download', 'clip.mp4');
            dwnlButton.removeAttribute('disabled');
        }
    }
}, 1000);
