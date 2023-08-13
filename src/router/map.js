export const routes = [
    { path: '/', redirect: '/'},    
    { path: '/waterfall', redirect: '/waterfall', component: () => import('../page/Waterfall')},    

];

console.log('export const routes');
