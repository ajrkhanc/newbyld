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
        source: '/how-do-training-companies-help-in-providing-business-productivity-solutions',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/experiential-learning-through-business-simulations',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/why-organizational-culture-matters',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/factors-that-influence-assessment-outcomes',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/building-a-coaching-culture-starts-with-your-people-leaders',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/do-you-have-a-business-acumen-gap-in-your-company',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/10-key-traits-of-a-gen-z-employee',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/a-guide-for-working-from-home-parents',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/not-making-the-best-out-of-your-virtual-meetings-probably-youre-missing-this',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/6-ways-to-talk-to-your-team-when-the-times-are-challenging',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/5-ways-to-answer-unanswerable-questions-effectively',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/ideas-to-maintain-a-great-company-culture-while-working-remotely',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/learn-5-qualities-of-a-great-leader-to-lead-the-change',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-to-prepare-teams-for-the-postpandemic-world',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/excellent-ideas-to-maintain-a-great-company-culture-while',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/secrets-behind-making-smart-decisions-in-the-time-of-uncertainty',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/importance-of-learning-to-keep-employee-morale-higher',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/what-is-the-importance-of-leadership-in-an-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/5-useful-ways-to-communicate-with-employees-during-a-crisis',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/5-effective-ways-to-be-an-inclusive-leader-during-a-crisis',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/what-are-the-ways-to-create-a-strong-company-culture',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/reasons-why-ld-is-vital-in-change-management-during-a-crisis',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-to-put-competency-based-training-to-work-for-your-company',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-importance-of-providing-support-to-a-remote-team',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-coaches-can-help-organizations-during-a-pandemic',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/latest-training-trends-for-remote-workforce',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/importance-of-having-a-good-eq-in-an-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/managing-sales-team-during-virtual-times',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-post-covid19-future-of-facetoface-training',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/importance-of-selfcompassion-for-a-leader',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/ld-support-during-times-of-crisis',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-world-is-changing-and-so-should-your-ld-initiatives',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/difficult-to-find-human-connection-in-this-new-reality-read-on',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/corporate-training-is-the-new-wave-of-survival',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/leadership-development-program-in-india',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/corporate-training-a-necessity-for-the-future',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/executive-coaching-in-india',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-health-of-the-training-market-after-covid19',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/coaching-and-mentoring-for-an-adaptable-workforce',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/psychological-assessment-is-the-key-for-leadership-assessment',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-importance-of-early-leadership-coaching-in-succession-planning',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/need-for-assessment-learning',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/need-for-corporate-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/never-underestimate-the-influence-of-corporate-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/top-corporate-training-trends-to-look-for-in-2021',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/consultative-selling-is-a-great-way-to--increase-your-profit',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/five-quick-tips-to-mastering-customer-service-skills',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/organizational-development-a-necessity',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-coaching-and-mentoring-can-help-in-succeeding-amid-challenging-business-environment',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-can-coaching-certification-be-advantageous-for-your-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/leadership-training-the-effective-powerhouse-of-an-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/exploring-the-2021-learning-and-development-trends',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/train-the-trainer-program-leads-to-an-organizations-growth-but-how',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/5-perks-of-learning-and-development-for-modern-establishments',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/unable-to-lead-a-successful-change-involve-your-people',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/7-signs-you-have-a-toxic-workplace--and-how-to-fix-it',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/train-the-trainer',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-to-shift-employees-learning-mindset-from-must-do-to-want-to',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-does-psychometric-assessment-help-in-organizational-development',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/best-corporate-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/all-you-need-to-know-about-coaching-and-mentoring',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/6-learning-and-development-trends-in-2021-finding-opportunity-in-change',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/psychometric-assessment-provide-the-best-assessment-for-learning-to-enable-your-workforce',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-byld-helps-maximizing-business-and-employee-productivity',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/training-companies-can-make-assessment-for-learning-more-fruitful',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/psychological-assessment-pave-the-way-for-better-leadership-assessment',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/what-types-of-temporary-staffing-solutions-do-staffing-companies-provide',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/coaching-in-the-workplace-revolutionizes-organizational-development',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/revolutionize-coaching-and-mentoring-with-the-help-of-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/best-business-productivity-solutions-provided-by-training-companies',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-does-assessment-for-learning-enhance-leadership-training',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/learn-how-psychometric-assessments-and-coaching-certifications-are-transforming-organizations',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-do-training-companies-help-in-providing-business-productivity-solutions-1659027661450',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/reasons-why-temporary-staffing-is-the-most-preferred-staffing-service',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/coaching-and-mentoring-upscale-massive-organizational-development',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-have-corporate-training-companies-utilized-elearning-portals',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/impact-of-elearning-portal-on--organizational-development',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-does-coaching-certification-facilitate-coaching-in-the-workplace',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/psychometric-assessment-improves-the-scope-of-learning-of-your-employees',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/profitability-of-training-companies-providing-business-productivity-solutions',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/learn-the-importance-of-psychometric-assessments-in-your-learning-journey',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/leadership-management-courses-and-trainings-to-upskill-your-managers',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-to-choose-your-staffing-partner',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/learn-how-to-coach-your-people-the-right-way',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/optimizing-the-outcomes-of-corporate-leadership-development-program-a-framework-for-analyzing-the-understanding-and-transfer-of-leadership-mastery',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-psychometric-assessment-helps-in-creating-a-productive-workforce',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/make-corporate-learning-better-with-the-power-of-experiential-learning',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-elearning-portal-is-upskilling-employees-in-an-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/effective-manpower-staffing-leads-to-innovation',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/develop-leadership-skills-with-bylds-coaching-and-mentoring-certifications',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-gateway-for-employee-skill-development-online-elearning-portal',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/become-a-global-leader-with-byld-group',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/how-is-the-psychometric-assessment-test-crucial-for-an-organization',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/why-does-a-corporate-organization-need-a-leadership-management-course',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/need-top-talent-for-your-company-know-how-to-hire-the-best-on-a-shoestring-budget',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/recruit-and-retain-a-skilled-workforce-with-temporary-staffing-services',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/become-a-frontline-leader-in-the-times-of-crisis-with-tips-from-industry-experts',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/facing-increasing-employee-resentment-heres-a-quick-guide-to-address-the-core-issues',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/leadership-development-training-boosts-job-performance-upto-20--a-quick-fact-check',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/infusing-a-learning-culture-into-an-organization-ensures-growth-and-viability--heres-how',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/global-hr-technology-market-at-31-billion-in-20212022-care-to-invest',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/soft-skills-training-yields-250-roi-in-factories-applicable-for-it-employees',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/leadership-training-contributes-to-a-28-improvement-in-onthejob-leadership-behaviors',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/coaching-training-for-managers-helps-unlock-the-potential-within-the-team',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-corporate-leadership-training-market-yoy-growth-rate-in-2022-stands-at-787',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-global-investment-in-leadership-training-is-expected-to-be-over-50-billion',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/training-and-development-to-combat-recession',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/transforming-organizational-culture-by-upskilling-your-managers',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/3-quarters-of-millennials-will-quit-their-jobs-in-2023-due-to-lack-of-skillbuilding-opportunities',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/a-roadmap-for-better-management',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/why-will-leaders-need-training-in-2023',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/great-companies-have-both-productivity-and-efficiency',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/2023-is-all-about-motivation-performance-and-reliability',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/combining-change-management-with-training-to-ensure-better-adjustment',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/best-business-productivity-solutions-in-2023',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/from-vuca-to-bani-understanding-the-changing-business-landscape',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/effective-use-of-humility-to-transform-into-a-mature-leader',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/getting-to-know-the-new-kid-on-the-block-chatgpt-the-fastestgrowing-app-of-all-time',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/quiet-firing-vs-quiet-quitting-impact-and-how-to-stop-it',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/learning-to-lead-through-the-turbulence-with-the-help-of-a-new-alternative-to-vuca',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/bare-minimum-monday-is-the-new-workplace-trend-you-need-to-know-about',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/ready-to-build-an-accountable-workforce-for-optimum-results-these-5-tips-might-help',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/conflict-resolution-or-conflict-management-the-skills-that-are-sought-after-today',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/experiential-learning-and-virtual-reality-are-reshaping-the-future-in-ld',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/improving-your-employees-time-management-skills-to-increase-performance',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/a-quick-guide-to-professional-coaching-and-all-you-need-to-know-in-2023',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/understanding-the-pros-and-cons-of-the-democratic-leadership-style',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-power-of-immersive-learning-on-workforce-productivity',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/an-overview-of-the-most-powerful-leadership-skill--empathy',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/coaching-goals-for-2023-what-to-expect-and-more',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/7-detailed-ways-to-develop-worklife-integration-and-improve-employee-wellbeing',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/leadership-training-and-development-trends-to-follow-in-2023',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/decoding-the-top-hr-trends-in-2023-staffing-solutions-for-businesses',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-market-for-training-in-soft-skills-is-set-to-touch-66075-million-by-the-year-2030',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/being-an-effective-leader-impacts-employee-wellbeing-and-mental-health',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/unlocking-how-to-become-a-life-coach-to-influence-and-motivate-others',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/immersive-learning-your-solution-to-workplace-and-training-problems',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/talent-disruption-quiet-hiring-and-other-workplace-trends-transforming-the-indian-business-sector',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/setting-goals-together-with-leadership-development-are-the-pillars-of-long-time-success',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/pull-your-business-out-of-the-ordinary-standard-with-custom-ld-training-solutions',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/the-secret-sauce-how-custom-coaching-unlocks-hidden-potentials',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/harness-the-power-of-leadership-the-importance-of-leadership-building-for-your-employees',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        {
        source: '/unveiling-the-power-of-executive-coaching-for-your-organizational-growth-and-development',
        destination: 'https://blog.byldgroup.com',
        permanent: true,
        },
        
        
      

      

    ]
  },
}


