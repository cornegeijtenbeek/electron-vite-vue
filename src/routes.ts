import About from './components/About.vue';
import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';

const routes = {
    '/': Home,
    '/about': About,
} as const;

export function getView(path: string) {
    return isRoute(path) ? routes[path] : NotFound;
}

function isRoute(value: string): value is keyof typeof routes {
    return value in routes;
}
