module.exports = {
  reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: '/coaching/become-a-professional-coach',
        destination: '/coaching/become-a-professional-coach-marketing',
        permanent: true,
      },

      {
        source: '/coaching/become-a-professional-coach-marketing',
        destination: '/coaching/become-a-professional-coach-assessment-m',
        permanent: true,
      },

      {
        source: '/coaching/become-a-professional-coach-pre-program-assessment',
        destination: '/coaching/become-a-professional-coach-pre-program-assessment-s',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/gtd-assessment',
        destination: '/cruciallifechangingskills/assessment/gtd-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/influencer-assessment',
        destination: '/cruciallifechangingskills/assessment/influencer-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment',
        destination: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/what-would-you-do-assessment',
        destination: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/gtd-assessment-marketing',
        destination: '/cruciallifechangingskills/assessment/gtd-assessment-m',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/gtd-assessment-sales',
        destination: '/cruciallifechangingskills/assessment/gtd-assessment-s',
        permanent: true,
      },

     

      {
        source: '/cruciallifechangingskills/assessment/influencer-assessment-marketing',
        destination: '/cruciallifechangingskills/assessment/influencer-assessment-m',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/influencer-assessment-sales',
        destination: '/cruciallifechangingskills/assessment/influencer-assessment-s',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-marketing',
        destination: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-m',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-sales',
        destination: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-s',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-marketing',
        destination: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-m',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-sales',
        destination: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-s',
        permanent: true,
      },


















      {
        source: '/jenson-8/jenson-8-survey',
        destination: '/jenson-8/jenson-8-survey-marketing',
        permanent: true,
      },

      {
        source: '/leader-behaviour-assessment',
        destination: '/leader-behaviour-assessment-marketing',
        permanent: true,
      },

      {
        source: '/leader-behaviour-assessment2',
        destination: '/leader-behaviour-assessment-sales',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot',
        destination: '/coaching/coaching-snapshot-marketing',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-marketing',
        destination: '/coaching/coaching-snapshot-assessment-m',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-marketing/:slug',
        destination: '/coaching/coaching-snapshot-assessment-m/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },


      {
        source: '/coaching/coaching-snapshot-internal-assessment',
        destination: '/coaching/coaching-snapshot-sales',
        permanent: true,
      },

      {
        source: '/coaching/become-a-professional-coach-sales',
        destination: '/coaching/become-a-professional-coach-pre-program-assessment',
        permanent: true,
      },

      {
        source: '/coaching/become-a-professional-coach-pre-program-assessment',
        destination: '/coaching/become-a-professional-coach-pre-program-assessment-s',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-pre-program-assessment',
        destination: '/coaching/coaching-snapshot-pre-program-assessment-s',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-pre-program-assessment/:slug',
        destination: '/coaching/coaching-snapshot-pre-program-assessment-s/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },

      {
        source: '/cp/cp-marketing',
        destination: '/cp-assessment-m',
        permanent: true,
      },

      {
        source: '/jenson-8/jenson-8-survey-marketing',
        destination: '/jenson-8/jenson-8-survey-assessment-m',
        permanent: true,
      },

      {
        source: '/jenson-8/jenson-8-survey-sales',
        destination: '/jenson-8/jenson-8-survey-assessment-s',
        permanent: true,
      },


      {
        source: '/leader-behaviour-assessment-marketing',
        destination: '/leader-behaviour-assessment-m',
        permanent: true,
      },
      {
        source: '/leader-behaviour-assessment-sales',
        destination: '/leader-behaviour-assessment-s',
        permanent: true,
      },
      {
        source: '/leader-behaviour-assessment-self-sales',
        destination: '/leader-behaviour-assessment-s-s',
        permanent: true,
      },

      {
        source: '/eaglesflightindia/promotional-lp',
        destination: '/eaglesflightindia/lp',
        permanent: true,
      },






      {
        source: '/benefits-of-coaching-and-mentoring-in-the-gig-economy',
        destination: 'https://blog.byldgroup.com/benefits-of-coaching-and-mentoring-in-the-gig-economy/',
        permanent: true,
      },

      {
        source: '/the-7-senses-of-self-development',
        destination: 'https://blog.byldgroup.com/the-7-senses-of-self-development/',
        permanent: true,
      },

      {
        source: '/how-personality-assessment-improves-safety-at-work',
        destination: 'https://blog.byldgroup.com/how-personality-assessment-improves-safety-at-work/',
        permanent: true,
      },

      {
        source: '/business-simulation-games-5-tips-on-how-they-help-you-prepare',
        destination: 'https://blog.byldgroup.com/business-simulation-games-5-tips-on-how-they-help-you-prepare/',
        permanent: true,
      },

      {
        source: '/why-the-american-red-cross-chose-insideout-coaching-virtual-',
        destination: 'https://blog.byldgroup.com/why-the-american-red-cross-chose-insideout-coaching-virtual/',
        permanent: true,
      },

      {
        source: '/build-your-resilience-in-the-face-of-a-crisis',
        destination: 'https://blog.byldgroup.com/build-your-resilience-in-the-face-of-a-crisis/',
        permanent: true,
      },

      {
        source: '/virtual-meetings-dont-have-to-be-a-bore',
        destination: 'https://blog.byldgroup.com/virtual-meetings-dont-have-to-be-a-bore/',
        permanent: true,
      },

      {
        source: '/learn-to-have-a-clear-vision-to-sustain-in-the-postcovid19-environment',
        destination: 'https://blog.byldgroup.com/learn-to-have-a-clear-vision-to-sustain-in-the-post-covid19-environment/',
        permanent: true,
      },

      {
        source: '/train-the-trainer-training-is-it-mandatory',
        destination: 'https://blog.byldgroup.com/train-the-trainer-training-is-it-mandatory',
        permanent: true,
      },

      {
        source: '/4-undeniable-assets-of-the-best-corporate-training-companies',
        destination: 'https://blog.byldgroup.com/4-undeniable-assets-of-the-best-corporate-training-companies/',
        permanent: true,
      },

      {
        source: '/corporate-training-companies--paving-the-way-to-a-better-future',
        destination: 'https://blog.byldgroup.com/corporate-training-companies-paving-the-way-to-a-better-future/',
        permanent: true,
      },

      {
        source: '/leadership-training-for-women-can-increase-productivity',
        destination: 'https://blog.byldgroup.com/leadership-training-for-women-can-increase-productivity/',
        permanent: true,
      },

      {
        source: '/the-role-and-importance-of-motivation-in-an-organization',
        destination: 'https://blog.byldgroup.com/the-role-and-importance-of-motivation-in-an-organization/',
        permanent: true,
      },

      {
        source: '/digital-learning-and-development-in-2023-for-business-growth',
        destination: 'https://blog.byldgroup.com/digital-learning-and-development-in-2023-for-business-growth/',
        permanent: true,
      },

      {
        source: '/leadership-training-for-women-in-2023-a-look-at-the-new-leaders',
        destination: 'https://blog.byldgroup.com/leadership-training-for-women-in-2023-a-look-at-the-new-leaders/',
        permanent: true,
      },

      {
        source: '/from-strength-to-strength-how-custom-leadership-solutions-uplift-individual-skills',
        destination: 'https://blog.byldgroup.com/from-strength-to-strength-how-custom-leadership-solutions-uplift-individual-skills',
        permanent: true,
      },

      {
        source: '/transformational-leadership-guiding-people-to-excellence-innovation-and-inspiration',
        destination: 'https://blog.byldgroup.com/transformational-leadership-guiding-people-to-excellence-innovation-and-inspiration',
        permanent: true,
      },


      {
        source: '/immersive-learning-implementation-best-practices-benefits',
        destination: 'https://blog.byldgroup.com/immersive-learning-implementation-best-practices-benefits-2/',
        permanent: true,
      },

      {
        source: '/unveiling-the-power-of-executive-coaching-for-your-organizational-growth-and-development',
        destination: 'https://blog.byldgroup.com/unveiling-the-power-of-executive-coaching-for-your-organizational-growth-and-development/',
        permanent: true,
      },

      {
        source: '/how-to-create-and-deliver-the-best-custom-employee-training-program',
        destination: 'https://blog.byldgroup.com/how-to-create-and-deliver-the-best-custom-employee-training-program/',
        permanent: true,
      },

      {
        source: '/blog',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },
      

      {
        source: '/[posturl]',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
      },

      

    ]
  },
}


