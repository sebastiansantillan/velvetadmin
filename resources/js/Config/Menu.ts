import type { MenuItem } from '@/Interfaces/Menu';
const menuItems : MenuItem[] = [
    {
       titulo: 'Menu1',
       link : '/menu1',
       iconColor : 'text-red-600',
       subgroup: [
          { 
             titulo: 'Subitem1a',
             link : '/subitem1'
          },
          { 
             titulo: 'Subitem2b',
             link : '/subitem2'
          }
       ],
       subGroupOpen: false
    },
    {
       titulo: 'Menu2',
       link : '/menu2',
       subgroup: [
          { 
             titulo: 'Subitem3a',
             link : '/subitem3'
          },
          { 
             titulo: 'Subitem4b',
             link : '/subitem4'
          }
       ],
       subGroupOpen: false
    },
    {
       titulo: 'Menu3',
       link : 'menu3'
    }
 ];

 export default menuItems;