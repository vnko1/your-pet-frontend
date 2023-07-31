export const options = [
  {
    value: 'your-pet',
    label: 'your pet',
  },
  {
    value: 'sell',
    label: 'sell',
  },
  {
    value: 'lost-found',
    label: 'lost/found',
  },
  {
    value: 'in-good-hands',
    label: 'in good hands',
  },
];

export const sexOptions = [
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'male',
    label: 'Male',
  },
];

export const titleChange = title => {
    switch (title) {
        case 'sell':
            return "Add  pet for sell";
        case 'lost-found':
            return "Add lost pet";
        case 'in-good-hands':
            return "Add pet in good hands";
        default:
            return "Add pet";
    }
};

export const fields = [
    {
        name: 'name',
        label: 'Pet’s name',
        placeholder: 'Type name pet',
        type: "text"
        
    },
    {
        name: 'birthday',
        label: 'Date of birth',
        placeholder: 'Type date of birth',
        type: "date"
        
    },
    {
        name: 'type',
        label: 'Type',
        placeholder: 'Type of pet',
        type: "text"
        
    },
];