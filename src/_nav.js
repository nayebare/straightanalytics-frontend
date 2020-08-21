export default {
  items: [
    {
      name: 'Side Menu',
      url: '/dashboard',
      icon: 'icon-menu',
      badge: {
        variant: 'info',
        // text: 'Menu',
      },
    },
    {
      title: true,
      name: 'Connected Devices',
      wrapper: {           
        element: '',        
      },
      class: ''            
    },

    {
      name: 'Sensors',
      url: '/devices',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        // text: 'NEW',
      },
    },
    {
      name: 'Sysmon #vr1.0.1',
      url: 'https://#',
      icon: 'icon-version',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    }
  ],
};
