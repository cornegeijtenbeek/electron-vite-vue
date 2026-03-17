export function getKeyDownEventHandlers(): Omit<EventHandler, 'callback'>[] {
    return handlers.map(({ callback, ...rest }) => rest);
}

export function handleKeyDownEvent(event: KeyboardEvent) {
    const handler = handlers.find((i) => i.key === event.key);

    if (handler) {
        event.preventDefault();
        handler.callback(event);
    } else {
        console.info(`${event.key} is not implemented yet`);
    }
}

interface EventHandler {
    key: KeyboardEvent['key'];
    symbol?: string;
    description: string;
    callback: (event: KeyboardEvent) => void;
}

const handlers: EventHandler[] = [
    {
        key: 'f',
        description: 'Fullscreen',
        callback: () => toggleFullScreen(),
    },
    {
        key: 'r',
        description: 'Reload',
        callback: () => reloadWindow(),
    },
    {
        key: 'ArrowRight',
        symbol: '→',
        description: 'Next',
        callback: () => goToNextView(),
    },
    {
        key: 'ArrowLeft',
        symbol: '←',
        description: 'Previous',
        callback: () => goToPreviousView(),
    },
    {
        key: ' ',
        symbol: 'Space',
        description: 'Pause',
        callback: () => togglePause(),
    },
    {
        key: 'm',
        description: 'Mute',
        callback: () => toggleMute(),
    },
] as const;

function toggleFullScreen() {
    if (window.document.fullscreenElement) {
        window.document.exitFullscreen();
    } else {
        window.document
            .getElementById('app')
            ?.requestFullscreen()
            .catch(() => console.error('Unable to toggle fullscreen'));
    }
}

function reloadWindow() {
    window.location.reload();
}

function goToNextView() {
    console.warn('Next is not implemented yet');
}

function goToPreviousView() {
    console.warn('Previous is not implemented yet');
}

function togglePause() {
    console.warn('Pause is not implemented yet');
}

function toggleMute() {
    console.warn('Mute is not implemented yet');
}
