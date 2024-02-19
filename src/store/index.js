import { reactive } from "vue";

export const store = reactive({
  sections: [
    {
        name:'our business area',
        title:'services',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed, nihil perferendis officia non dicta natus in impedit ex ratione, est eveniet voluptate temporibus voluptatum consequatur nesciunt. Architecto, numquam ducimus?'
    },
    {
        name:'about the network',
        title:'company',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed, nihil perferendis officia non dicta natus in impedit ex ratione, est eveniet voluptate temporibus voluptatum consequatur nesciunt. Architecto, numquam ducimus?'
    },
    {
        name:'we do more for everyone',
        title:'projects',
    },
    {
        name:'what are we doing',
        title:'numbers',
    },
    {
        name:'send a message',
        title:'touch',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed, nihil perferendis officia non dicta natus in impedit ex ratione, est eveniet voluptate temporibus voluptatum consequatur nesciunt. Architecto, numquam ducimus?'
    }
    
    ],
});
