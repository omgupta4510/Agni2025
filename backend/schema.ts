// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  TextFieldConfig,
  image,
  integer,
  checkbox,
} from '@keystone-6/core/fields'


// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document'
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import {type Lists} from '.keystone/types'

const textfeild:TextFieldConfig<any>={ ui: { displayMode: 'textarea' },validation: { isRequired: true},db:{ nativeType:`VarChar(${6000})`}};
const namefeild:TextFieldConfig<any>={ ui: { displayMode: 'textarea' },validation: { isRequired: true},db:{ nativeType:`VarChar(${500})`}};
export const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),
  about: list({
    access: allowAll,
    fields: {
      route: text({ validation: { isRequired: true } }),
      title: text({ validation: { isRequired: true } }),
      description: text(textfeild),
      link: text(),
      
    },
  }),
  conferenceTheme: list({
    access: allowAll,
    fields: {
      title: text(textfeild),
    },
  }),
  organizingCommittee: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      category: select({
        options: [
          { label: 'Parton', value: 'Parton' },
          {label:'Chair Person',value:'Chair Person'},
          { label: 'Co-Chair Person', value: 'Co-Chair Person' },
          { label: 'Organizing Secretary', value: 'Organizing Secretary' },
          { label: 'Joint-Organizing Secretary', value: 'Joint-Organizing Secretary' },
          {label:'Advisory Committee',value:'Advisory Committee'},
          {label:'Treasurer',value:'Treasurer'},
        ],
      }),
      designation: text({ validation: { isRequired: true } }),
      dept:text({validation:{isRequired:true}}),
      desc:text({ui: { displayMode: 'textarea' }}),
      photoUrl: text(),
    },
  }),
  technicalCommittee: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      designation: text({ validation: { isRequired: true } }),
      dept:text({validation:{isRequired:true}}),
      institute: text({ validation: { isRequired: true } }),
    },
  }),
  sponsorship: list({
    access: allowAll,
    fields: {
      type:text({validation:{isRequired:true}}),
      amount:integer({validation:{isRequired:true}}),
      delegates:integer({validation:{isRequired:true}}),
      stallarea:integer({validation:{isRequired:true} ,defaultValue:0}),
      backdropBanner: checkbox({
        defaultValue: false
      }),
      presentationSlot: checkbox({
        defaultValue: false
      }),
      addvertisement: text({validation:{isRequired:true}}),
    }
  }),
  importantDate: list({
    access: allowAll,
    fields: {
      event: text({ validation: { isRequired: true } }),
      date: text({ validation: { isRequired: true } }),
      description: text(),
      important:checkbox({defaultValue:false}),
    },
  }),
  registrationDetail: list({
    access: allowAll,
    fields: {
      native:select({
        options: [
          {label: 'Indian', value: 'indians'},
          {label: 'Foreign', value: 'foreign'},
        ]
      }),
      particulars: text({ validation: { isRequired: true } }),
      amt_early_bird: integer({ validation: { isRequired: true } }),
      amt_regular: integer({ validation: { isRequired: true } }),
    },
  }),
  speaker: list({
    access: allowAll,
    fields: {
      type:text({validation:{isRequired:true}}),
      name: text(namefeild),
      designation: text(namefeild),
      title: text(namefeild),
      bio: text(textfeild),
      photoUrl: text({validation:{isRequired:true}}),
    }}),
    toursit:list({
      access:allowAll,
      fields:{
        name:text({validation:{isRequired:true}}),
        location:text({validation:{isRequired:true}}),
        photoUrl:text({validation:{isRequired:true}}),
        desc:text(textfeild)
      }
    }),
    track:list({
      access:allowAll,
      fields:{
        number:integer({validation:{isRequired:true}}),
        type:text({validation:{isRequired:true}}),
        name:text({validation:{isRequired:true}})
      }}),
    eventDetail:list({
      access:allowAll,
      fields:{
        name:text({validation:{isRequired:true}}),
        desc:text(textfeild),
        photoUrl:text(),
        link:text(),
      }}),
    generalInformation:list({
      access:allowAll,
      fields:{
        name:text({validation:{isRequired:true}}),
        desc:text(textfeild)
      }
    }),
    subtheme:list({
      access:allowAll,
      fields:{
        number:integer({validation:{isRequired:true}}),
        desc:text({validation:{isRequired:true}}),
      }}),
      notice:list({
        access:allowAll,
        fields:{
          title:text({validation:{isRequired:true}}),
          date:text({validation:{isRequired:true}}),
          isNew:checkbox({
            defaultValue: false
          }),
          createdAt: timestamp({
            defaultValue: { kind: 'now' },
          }),
        }}),
        publication:list({
          access:allowAll,
          fields:{
            name:text({validation:{isRequired:true}}),
            desc:text(textfeild),
            photoUrl:text(),
            linkname:text(),
            link:text(),
          }}),
          homeimage:list({
            access:allowAll,
            fields:{
              name:text({validation:{isRequired:true}}),
              photoUrl:text({validation:{isRequired:true}}),
              detail:checkbox({defaultValue:false})
            }
          }),
} satisfies Lists;
