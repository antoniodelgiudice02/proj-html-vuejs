import { reactive } from "vue";

export const store = reactive({
  sections: [
    {
        name:'our business area',
        title:'services',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed, nihil perferendis officia non dicta natus in impedit ex ratione, est eveniet voluptate temporibus voluptatum consequatur nesciunt. Architecto, numquam ducimus?',
        cards: [
            {
                title: 'card 1',
                text: 'text card 1'
            },
            {
                title: 'card 2',
                text: 'text card 2'
            },
            {
                title: 'card 3',
                text: 'text card 3'
            },
            {
                title: 'card 4',
                text: 'text card 4'
            },
            {
                title: 'card 5',
                text: 'text card 5'
            },
            {
                title: 'card 6',
                text: 'text card 6'
            }
        ]
    },
    {
        name:'about the network',
        title:'company',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed, nihil perferendis officia non dicta natus in impedit ex ratione, est eveniet voluptate temporibus voluptatum consequatur nesciunt. Architecto, numquam ducimus?',
        cards: [
            {
                title: 'card 1',
                text: 'text card 1'
            },
            {
                title: 'card 2',
                text: 'text card 2'
            },
            {
                title: 'card 3',
                text: 'text card 3'
            },
            {
                title: 'card 4',
                text: 'text card 4'
            },
        ]
    
    },
    {
        name:'we do more for everyone',
        title:'projects',
        cards: [
            {
                title: 'card 1',
                text: 'text card 1'
            },
            {
                title: 'card 2',
                text: 'text card 2'
            },
            {
                title: 'card 3',
                text: 'text card 3'
            },
            {
                title: 'card 4',
                text: 'text card 4'
            },
            {
                title: 'card 5',
                text: 'text card 5'
            },
            {
                title: 'card 6',
                text: 'text card 6'
            }
        ]
    },
    {
        name:'what are we doing',
        title:'numbers',
        cards: [
            {
                title: 'card 1',
                text: 'text card 1'
            },
            {
                title: 'card 2',
                text: 'text card 2'
            },
            {
                title: 'card 3',
                text: 'text card 3'
            },
            {
                title: 'card 4',
                text: 'text card 4'
            }
        ]
    },
    {
        name:'send a message',
        title:'touch',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed, nihil perferendis officia non dicta natus in impedit ex ratione, est eveniet voluptate temporibus voluptatum consequatur nesciunt. Architecto, numquam ducimus?',
    }
    
    ],
});



store.sections.forEach(object => {
    const section = object
    console.log(section)
    return section
});



