import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class YouAllServicesService {

  private mainObject: any[] = [
    {
      id: 1,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.web_design', routing: '/our-services/web-design' },
        ],
        title: 'serv.web_design.title',
        desc: 'serv.web_design.desc',
      },
      firstSection: {
        title: 'serv.web_design.section1.title',
        desc: 'serv.web_design.section1.desc',
        img: 'assets/images/our-design.svg',
      },
      secondSection: {
        title: 'serv.web_design.section2.title',
        data: [
          { title: 'serv.web_design.section2.data.title1', desc: 'serv.web_design.section2.data.desc1' },
          { title: 'serv.web_design.section2.data.title2', desc: 'serv.web_design.section2.data.desc2' },
          { title: 'serv.web_design.section2.data.title3', desc: 'serv.web_design.section2.data.desc3' },
          { title: 'serv.web_design.section2.data.title4', desc: 'serv.web_design.section2.data.desc4' },
        ]
      },
      thirdSection: {
        img: 'assets/images/you-frame.svg',
        title: 'serv.web_design.section3.title',
        data: [
          { title: 'serv.web_design.section3.data.title1', desc: 'serv.web_design.section3.data.desc1' },
          { title: 'serv.web_design.section3.data.title2', desc: 'serv.web_design.section3.data.desc2' },
          { title: 'serv.web_design.section3.data.title3', desc: 'serv.web_design.section3.data.desc3' },
          { title: 'serv.web_design.section3.data.title4', desc: 'serv.web_design.section3.data.desc4' },
        ]
      },
      fourthSection: {
        title: 'serv.web_design.section4.title',
        data: [
          { id: 1, title: 'serv.web_design.section4.data.title1', desc: 'serv.web_design.section4.data.desc1', color: 'color-1' },
          { id: 2, title: 'serv.web_design.section4.data.title2', desc: 'serv.web_design.section4.data.desc2', color: 'color-2' },
          { id: 3, title: 'serv.web_design.section4.data.title3', desc: 'serv.web_design.section4.data.desc3', color: 'color-3' },
          { id: 4, title: 'serv.web_design.section4.data.title4', desc: 'serv.web_design.section4.data.desc4', color: 'color-1' },
          { id: 5, title: 'serv.web_design.section4.data.title5', desc: 'serv.web_design.section4.data.desc5', color: 'color-2' },
          { id: 6, title: 'serv.web_design.section4.data.title6', desc: 'serv.web_design.section4.data.desc6', color: 'color-3' },
          { id: 7, title: 'serv.web_design.section4.data.title7', desc: 'serv.web_design.section4.data.desc7', color: 'color-1' },
          { id: 8, title: 'serv.web_design.section4.data.title8', desc: 'serv.web_design.section4.data.desc8', color: 'color-2' },
          { id: 9, title: 'serv.web_design.section4.data.title9', desc: 'serv.web_design.section4.data.desc9', color: 'color-3' },
          { id: 10, title: 'serv.web_design.section4.data.title10', desc: 'serv.web_design.section4.data.desc10', color: 'color-1' },
        ]
      }
    },
    {
      id: 2,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.mobile_app', routing: '/our-services/mobile-app' },
        ],
        title: 'serv.mobile_app.title',
        desc: 'serv.mobile_app.desc',
      },
      firstSection: {
        title: 'serv.mobile_app.section1.title',
        desc: 'serv.mobile_app.section1.desc',
        img: 'assets/images/Group1171278441.svg',
      },
      secondSection: {
        title: 'serv.mobile_app.section2.title',
        data: [
          { title: 'serv.mobile_app.section2.data.title1', desc: 'serv.mobile_app.section2.data.desc1' },
          { title: 'serv.mobile_app.section2.data.title2', desc: 'serv.mobile_app.section2.data.desc2' },
          { title: 'serv.mobile_app.section2.data.title3', desc: 'serv.mobile_app.section2.data.desc3' },
          { title: 'serv.mobile_app.section2.data.title4', desc: 'serv.mobile_app.section2.data.desc4' },
        ]
      },
      fourthSection: {
        title: 'serv.mobile_app.section4.title',
        data: [
          { id: 1, title: 'serv.mobile_app.section4.data.title1', desc: 'serv.mobile_app.section4.data.desc1', color: 'color-1' },
          { id: 2, title: 'serv.mobile_app.section4.data.title2', desc: 'serv.mobile_app.section4.data.desc2', color: 'color-2' },
          { id: 3, title: 'serv.mobile_app.section4.data.title3', desc: 'serv.mobile_app.section4.data.desc3', color: 'color-3' },
        ]
      }
    }
    ,
    {
      id: 3,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.hosting', routing: '/our-services/server' },
        ],
        title: 'serv.hosting.title',
        desc: 'serv.hosting.desc',
      },
      firstSection: {
        title: 'serv.hosting.section1.title',
        desc: 'serv.hosting.section1.desc',
        img: 'assets/images/Group1171278442.svg',
      },
      secondSection: {
        title: 'serv.hosting.section2.title',
        data: [
          { title: 'serv.hosting.section2.data.title1', desc: 'serv.hosting.section2.data.desc1' },
          { title: 'serv.hosting.section2.data.title2', desc: 'serv.hosting.section2.data.desc2' },
          { title: 'serv.hosting.section2.data.title3', desc: 'serv.hosting.section2.data.desc3' },
          { title: 'serv.hosting.section2.data.title4', desc: 'serv.hosting.section2.data.desc4' },
        ]
      },
      thirdSection: {
        img: 'assets/images/Frame2147225349copy.svg',
        title: 'serv.hosting.section3.title',
        data: [
          { title: 'serv.hosting.section3.data.title1', desc: 'serv.hosting.section3.data.desc1' },
          { title: 'serv.hosting.section3.data.title2', desc: 'serv.hosting.section3.data.desc2' },
          { title: 'serv.hosting.section3.data.title3', desc: 'serv.hosting.section3.data.desc3' },
          { title: 'serv.hosting.section3.data.title4', desc: 'serv.hosting.section3.data.desc4' },
        ]
      }
    }
    ,

    {
      id: 4,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.web_hosting', routing: '/our-services/web-hosting' },
        ],
        title: 'serv.web_hosting.title',
        desc: 'serv.web_hosting.desc',
      },
      firstSection: {
        title: 'serv.web_hosting.section1.title',
        desc: 'serv.web_hosting.section1.desc',
        img: 'assets/images/Group1171278442copy.svg',
      },
      secondSection: {
        title: 'serv.web_hosting.section2.title',
        data: [
          { title: 'serv.web_hosting.section2.data.title1', desc: 'serv.web_hosting.section2.data.desc1' },
          { title: 'serv.web_hosting.section2.data.title2', desc: 'serv.web_hosting.section2.data.desc2' },
          { title: 'serv.web_hosting.section2.data.title3', desc: 'serv.web_hosting.section2.data.desc3' },
          { title: 'serv.web_hosting.section2.data.title4', desc: 'serv.web_hosting.section2.data.desc4' },
        ]
      },
      fourthSection: {
        title: 'serv.web_hosting.section4.title',
        data: [
          { id: 1, title: 'serv.web_hosting.section4.data.title1', desc: 'serv.web_hosting.section4.data.desc1', color: 'color-1' },
          { id: 2, title: 'serv.web_hosting.section4.data.title2', desc: 'serv.web_hosting.section4.data.desc2', color: 'color-2' },
          { id: 3, title: 'serv.web_hosting.section4.data.title3', desc: 'serv.web_hosting.section4.data.desc3', color: 'color-3' },
          { id: 4, title: 'serv.web_hosting.section4.data.title4', desc: 'serv.web_hosting.section4.data.desc4', color: 'color-1' },
          { id: 5, title: 'serv.web_hosting.section4.data.title5', desc: 'serv.web_hosting.section4.data.desc5', color: 'color-2' },
          { id: 6, title: 'serv.web_hosting.section4.data.title6', desc: 'serv.web_hosting.section4.data.desc6', color: 'color-3' },
          { id: 7, title: 'serv.web_hosting.section4.data.title7', desc: 'serv.web_hosting.section4.data.desc7', color: 'color-1' },
          { id: 8, title: 'serv.web_hosting.section4.data.title8', desc: 'serv.web_hosting.section4.data.desc8', color: 'color-2' },
        ]
      }
    }
    ,
    {
      id: 5,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.server_management', routing: '/our-services/server-management' },
        ],
        title: 'serv.server_management.title',
        desc: 'serv.server_management.desc',
      },
      firstSection: {
        title: 'serv.server_management.section1.title',
        desc: 'serv.server_management.section1.desc',
        img: 'assets/images/Group1171278442copy2.svg',
      },
      secondSection: {
        title: 'serv.server_management.section2.title',
        data: [
          { title: 'serv.server_management.section2.data.title1', desc: 'serv.server_management.section2.data.desc1' },
          { title: 'serv.server_management.section2.data.title2', desc: 'serv.server_management.section2.data.desc2' },
          { title: 'serv.server_management.section2.data.title3', desc: 'serv.server_management.section2.data.desc3' },
          { title: 'serv.server_management.section2.data.title4', desc: 'serv.server_management.section2.data.desc4' },
        ]
      },
      thirdSection: {
        img: 'assets/images/you-frame.svg',
        title: 'serv.server_management.section3.title',
        data: [
          { title: 'serv.server_management.section3.data.title1', desc: 'serv.server_management.section3.data.desc1' },
          { title: 'serv.server_management.section3.data.title2', desc: 'serv.server_management.section3.data.desc2' },
          { title: 'serv.server_management.section3.data.title3', desc: 'serv.server_management.section3.data.desc3' },
          { title: 'serv.server_management.section3.data.title4', desc: 'serv.server_management.section3.data.desc4' },
        ]
      },
      fourthSection: {
        title: 'serv.server_management.section4.title',
        data: [
          { id: 1, title: 'serv.server_management.section4.data.title1', desc: 'serv.server_management.section4.data.desc1', color: 'color-1' },
          { id: 2, title: 'serv.server_management.section4.data.title2', desc: 'serv.server_management.section4.data.desc2', color: 'color-2' },
          { id: 3, title: 'serv.server_management.section4.data.title3', desc: 'serv.server_management.section4.data.desc3', color: 'color-3' },
          { id: 4, title: 'serv.server_management.section4.data.title4', desc: 'serv.server_management.section4.data.desc4', color: 'color-1' },
          { id: 5, title: 'serv.server_management.section4.data.title5', desc: 'serv.server_management.section4.data.desc5', color: 'color-2' },
        ]
      }
    },
    {
      id: 6,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.digital_marketing', routing: '/our-services/digital-marketing' },
        ],
        title: 'serv.digital_marketing.title',
        desc: 'serv.digital_marketing.desc',
      },
      firstSection: {
        title: 'serv.digital_marketing.section1.title',
        desc: 'serv.digital_marketing.section1.desc',
        img: 'assets/images/Group1171278442copy3.svg',
      },
      secondSection: {
        title: 'serv.digital_marketing.section2.title',
        data: [
          { title: 'serv.digital_marketing.section2.data.title1', desc: 'serv.digital_marketing.section2.data.desc1' },
          { title: 'serv.digital_marketing.section2.data.title2', desc: 'serv.digital_marketing.section2.data.desc2' },
          { title: 'serv.digital_marketing.section2.data.title3', desc: 'serv.digital_marketing.section2.data.desc3' },
          { title: 'serv.digital_marketing.section2.data.title4', desc: 'serv.digital_marketing.section2.data.desc4' },
        ]
      },
      thirdSection: {
        img: 'assets/images/Frame2147225349copy2.svg',
        title: 'serv.digital_marketing.section3.title',
        data: [
          { title: 'serv.digital_marketing.section3.data.title1', desc: 'serv.digital_marketing.section3.data.desc1' },
          { title: 'serv.digital_marketing.section3.data.title2', desc: 'serv.digital_marketing.section3.data.desc2' },
          { title: 'serv.digital_marketing.section3.data.title3', desc: 'serv.digital_marketing.section3.data.desc3' },
          { title: 'serv.digital_marketing.section3.data.title4', desc: 'serv.digital_marketing.section3.data.desc4' },
        ]
      }
    },
    {
      id: 7,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.design_services', routing: '/our-services/design-services' },
        ],
        title: 'serv.design_services.title',
        desc: 'serv.design_services.desc',
      },
      firstSection: {
        title: 'serv.design_services.section1.title',
        desc: 'serv.design_services.section1.desc',
        img: 'assets/images/Group1171278442copy4.svg',
      },
      secondSection: {
        title: 'serv.design_services.section2.title',
        data: [
          { title: 'serv.design_services.section2.data.title1', desc: 'serv.design_services.section2.data.desc1' },
          { title: 'serv.design_services.section2.data.title2', desc: 'serv.design_services.section2.data.desc2' },
          { title: 'serv.design_services.section2.data.title3', desc: 'serv.design_services.section2.data.desc3' },
          { title: 'serv.design_services.section2.data.title4', desc: 'serv.design_services.section2.data.desc4' },
        ]
      },
      thirdSection: {
        img: 'assets/images/Frame2147225349copy3.svg',
        title: 'serv.design_services.section3.title',
        data: [
          { title: 'serv.design_services.section3.data.title1', desc: 'serv.design_services.section3.data.desc1' },
          { title: 'serv.design_services.section3.data.title2', desc: 'serv.design_services.section3.data.desc2' },
          { title: 'serv.design_services.section3.data.title3', desc: 'serv.design_services.section3.data.desc3' },
          { title: 'serv.design_services.section3.data.title4', desc: 'serv.design_services.section3.data.desc4' },
        ]
      }
    },
    {
      id: 8,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.analytics', routing: '/our-services/web-design' },
        ],
        title: 'serv.analytics.title',
        desc: 'serv.analytics.desc',
      },
      firstSection: {
        title: 'serv.analytics.section1.title',
        desc: 'serv.analytics.section1.desc',
        img: 'assets/images/analticsGroup.svg',
      },
      secondSection: {
        title: 'serv.analytics.section2.title',
        data: [
          { title: 'serv.analytics.section2.data.title1', desc: 'serv.analytics.section2.data.desc1' },
          { title: 'serv.analytics.section2.data.title2', desc: 'serv.analytics.section2.data.desc2' },
          { title: 'serv.analytics.section2.data.title3', desc: 'serv.analytics.section2.data.desc3' },
          { title: 'serv.analytics.section2.data.title4', desc: 'serv.analytics.section2.data.desc4' },
        ]
      },
      thirdSection: {
        img: 'assets/images/FrameAnalatics.svg',
        title: 'serv.analytics.section3.title',
        data: [
          { title: 'serv.analytics.section3.data.title1', desc: 'serv.analytics.section3.data.desc1' },
          { title: 'serv.analytics.section3.data.title2', desc: 'serv.analytics.section3.data.desc2' },
          { title: 'serv.analytics.section3.data.title3', desc: 'serv.analytics.section3.data.desc3' },
          { title: 'serv.analytics.section3.data.title4', desc: 'serv.analytics.section3.data.desc4' },
        ]
      },
      fourthSection: {
        title: 'serv.analytics.section4.title',
        data: [
          { id: 1, title: 'serv.analytics.section4.data.title1', desc: 'serv.analytics.section4.data.desc1', color: 'color-1' },
          { id: 2, title: 'serv.analytics.section4.data.title2', desc: 'serv.analytics.section4.data.desc2', color: 'color-2' },
          { id: 3, title: 'serv.analytics.section4.data.title3', desc: 'serv.analytics.section4.data.desc3', color: 'color-3' },
          { id: 4, title: 'serv.analytics.section4.data.title4', desc: 'serv.analytics.section4.data.desc4', color: 'color-1' },
          { id: 5, title: 'serv.analytics.section4.data.title5', desc: 'serv.analytics.section4.data.desc5', color: 'color-2' },
        ]
      }
    },
    {
      id: 11,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.project_management', routing: '/our-services/web-design' },
        ],
        title: 'serv.project_management.title',
        desc: 'serv.project_management.desc',
      },
      firstSection: {
        title: 'serv.project_management.section1.title',
        desc: 'serv.project_management.section1.desc',
        img: 'assets/images/GroupProjectmanagment.svg',
      },
      secondSection: {
        title: 'serv.project_management.section2.title',
        data: [
          { title: 'serv.project_management.section2.data.title1', desc: 'serv.project_management.section2.data.desc1' },
          { title: 'serv.project_management.section2.data.title2', desc: 'serv.project_management.section2.data.desc2' },
          { title: 'serv.project_management.section2.data.title3', desc: 'serv.project_management.section2.data.desc3' },
          { title: 'serv.project_management.section2.data.title4', desc: 'serv.project_management.section2.data.desc4' },
        ]
      },
      thirdSection: {
        img: 'assets/images/FrameProjectmanagment.svg',
        title: 'serv.project_management.section3.title',
        data: [
          { title: 'serv.project_management.section3.data.title1', desc: 'serv.project_management.section3.data.desc1' },
          { title: 'serv.project_management.section3.data.title2', desc: 'serv.project_management.section3.data.desc2' },
          { title: 'serv.project_management.section3.data.title3', desc: 'serv.project_management.section3.data.desc3' },
          { title: 'serv.project_management.section3.data.title4', desc: 'serv.project_management.section3.data.desc4' },
        ]
      }
    },
    {
      id: 12,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.works_development', routing: '/our-services/web-design' },
        ],
        title: 'serv.works_development.title',
        desc: 'serv.works_development.desc',
      },
      firstSection: {
        title: 'serv.works_development.section1.title',
        desc: 'serv.works_development.section1.desc',
        img: 'assets/images/GroupWorkmanagment.svg',
      },
      secondSection: {
        title: 'serv.works_development.section2.title',
        data: [
          { title: 'serv.works_development.section2.data.title1', desc: 'serv.works_development.section2.data.desc1' },
          { title: 'serv.works_development.section2.data.title2', desc: 'serv.works_development.section2.data.desc2' },
          { title: 'serv.works_development.section2.data.title3', desc: 'serv.works_development.section2.data.desc3' },
          { title: 'serv.works_development.section2.data.title4', desc: 'serv.works_development.section2.data.desc4' },
        ]
      },
      thirdSection: {
        img: 'assets/images/FrameWorkManament.svg',
        title: 'serv.works_development.section3.title',
        data: [
          { title: 'serv.works_development.section3.data.title1', desc: 'serv.works_development.section3.data.desc1' },
          { title: 'serv.works_development.section3.data.title2', desc: 'serv.works_development.section3.data.desc2' },
          { title: 'serv.works_development.section3.data.title3', desc: 'serv.works_development.section3.data.desc3' },
          { title: 'serv.works_development.section3.data.title4', desc: 'serv.works_development.section3.data.desc4' },
        ]
      }
    },
    {
      id: 13,
      pageData: {
        breadCrumb: [
          { id: 0, name: 'serv.breadCrumb.home', routing: '/home' },
          { id: 1, name: 'serv.breadCrumb.service', routing: '/our-services' },
          { id: 2, name: 'serv.breadCrumb.technical_support', routing: '/our-services/web-design' },
        ],
        title: 'serv.technical_support.title',
        desc: 'serv.technical_support.desc',
      },
      firstSection: {
        title: 'serv.technical_support.section1.title',
        desc: 'serv.technical_support.section1.desc',
        img: 'assets/images/GroupTSupport.svg',
      },
      secondSection: {
        title: 'serv.technical_support.section2.title',
        data: [
          { title: 'serv.technical_support.section2.data.title1', desc: 'serv.technical_support.section2.data.desc1' },
          { title: 'serv.technical_support.section2.data.title2', desc: 'serv.technical_support.section2.data.desc2' },
          { title: 'serv.technical_support.section2.data.title3', desc: 'serv.technical_support.section2.data.desc3' },
          { title: 'serv.technical_support.section2.data.title4', desc: 'serv.technical_support.section2.data.desc4' },
        ]
      },
      thirdSection: {
        img: 'assets/images/FrameTSupport.svg',
        title: 'serv.technical_support.section3.title',
        data: [
          { title: 'serv.technical_support.section3.data.title1', desc: 'serv.technical_support.section3.data.desc1' },
          { title: 'serv.technical_support.section3.data.title2', desc: 'serv.technical_support.section3.data.desc2' },
          { title: 'serv.technical_support.section3.data.title3', desc: 'serv.technical_support.section3.data.desc3' },
          { title: 'serv.technical_support.section3.data.title4', desc: 'serv.technical_support.section3.data.desc4' },
        ]
      }
    },
  ];

  getObjectById(id: any): Observable<any> {
    const result = this.mainObject.find(obj => obj.id == id);
    return of(result);
  }
}
