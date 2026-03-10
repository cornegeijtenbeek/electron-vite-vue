import Explanatory from './components/Explanatory.vue';
import NotFound from './components/NotFound.vue';

const routes = {
    '/': Explanatory,
} as const;

export function getView(path: string) {
    return isRoute(path) ? routes[path] : NotFound;
}

function isRoute(value: string): value is keyof typeof routes {
    return value in routes;
}
