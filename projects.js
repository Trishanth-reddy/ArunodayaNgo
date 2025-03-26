document.addEventListener('DOMContentLoaded', function() {
    // Data for different projects
    const projectsData = {
        // Health Projects
        'care-support-1': {
            title: 'HIV & Nutrition ',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634495/3_gmdibh.webp',
            
            p1: 'HIV and malnutrition are interlinked—poor nutrition worsens HIV, and HIV speeds up malnutrition. People with HIV need a balanced diet, higher calorie intake, and often a multivitamin. Arunodaya Trust focuses on accountability, transparency, and community feedback in its programs. Nutritional Support Nutritional assessment and counseling are vital for HIV care, offering tailored advice on healthy eating, weight management, and managing side effects from treatment.',
            title1: "Nutrition support for HIV/AIDS infected Children : ",
            p2: 'The HIV/AIDS epidemic has left many children orphaned and vulnerable, facing stigma, isolation, and poverty. These children often live in hunger, cared for by elderly relatives with limited resources. Arunodaya Trust, since 2008, has been supporting 120 HIV-infected orphans, providing essential care and nutritious food to help strengthen their immune systems. A balanced diet improves their health and helps manage symptoms and medication side effects. Each month, Arunodaya Trust provides food packages, including rice, oil, dhal, jaggery, ragi flour, and soap, costing Rs. 700 per package, ensuring these children have the nourishment they need to survive.',
            
               
        },
        'care-support-2': {
            title: 'REPRODUCTIVE AND CHILD HEALTH PROGRAMMING :',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634494/0baf8bc6414905994c28607a79ad7461_udw3sv.jpg',
            title1:'',
            
            p1: `The National Family Planning Programme was launched in India post-independence 
to address the country's growing population. In 1996, the Target Free Approach was 
introduced, and following recommendations from the 1994 International Conference on 
Population and Development (ICPD), India launched the Reproductive and Child 
Health (RCH) programme in 1997, aimed at providing comprehensive reproductive 
health care.`,
            ul: `<ul style="list-style-type: disc; padding-left: 20px;">
                <li>Maternal and Child Health (MCH) services: Antenatal, intra-natal, and post-natal care.</li>
                <li>Special programs: Immunization, nutrition interventions, diarrhoeal disease control (ORT), Acute Respiratory Infection (ARI) control, etc.</li>
                <li>Child Survival and Safe Motherhood (CSSM): Implemented since 1992 for integrated services.</li>
            </ul>
            <h4 style="margin-top: 20px;">RCH Program Services:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>For Mothers:
                    <ul style="list-style-type: circle; padding-left: 20px;">
                        <li>Tetanus toxoid immunization</li>
                        <li>Prevention and treatment of anemia</li>
                        <li>Antenatal care, maternal complication identification</li>
                        <li>Safe deliveries (institutional and emergency management)</li>
                        <li>Birth spacing</li>
                    </ul>
                </li>
                <li>For Children:
                    <ul style="list-style-type: circle; padding-left: 20px;">
                        <li>Newborn care</li>
                        <li>Breastfeeding and weaning</li>
                        <li>Immunization</li>
                        <li>Management of diarrhea and ARI</li>
                        <li>Vitamin A supplementation</li>
                        <li>Treatment of anemia</li>
                    </ul>
                </li>
                <li>For Eligible Couples:
                    <ul style="list-style-type: circle; padding-left: 20px;">
                        <li>Access to contraceptives</li>
                        <li>Safe abortion services</li>
                        <li>Prevention of RTIs and STIs</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 15px;">Adolescent Health Services are also provided, including family life counseling.</p>
            <h4 style="margin-top: 15px;">The programme focuses on:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Client-oriented, need-based services</li>
                <li>Community Need Assessment (CNAA): Workload estimation is based on community needs, replacing centrally determined targets.</li>
                <li>Quality care: Emphasizing proper procedures and client satisfaction.</li>
            </ul>
            <p style="margin-top: 15px;">Major shifts include participatory planning with community involvement and emphasis on reproductive health, safe abortions, nutrition, and RTI/STI management.</p>`
        },
        'care-support-3': {
            title: 'MEDICAL CAMPS : ',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634503/9159076cef15f38790edc57e1081193a_gbjz2d.jpg',
            title1: "",
            p1: 'The Arunodaya Trust organizes free medical camps year-round in the slums of Rangareddy District. These camps serve around 2000 people in the villages,mostly the elderly and children, as many young people have migrated to cities for jobs. There are limited medical facilities, with absent doctors and poorly equipped centers, forcing locals to seek unqualified medical practitioners or travel far for care. ',
            ul: `<h4 style="margin-top: 20px;">Key Contributors:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Dr. Anusha (Bangalore): Provided drugs</li>
                <li>Mr. Prasada Rao: Helped with banners, pamphlets, and brochure translation</li>
                <li>Villagers and local associations: Supported the camp's success</li>
            </ul>

            <h4 style="margin-top: 20px;">Objectives:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Assess the population's health and socioeconomic problems</li>
                <li>Provide primary health care to village doorsteps</li>
            </ul>

            <h4 style="margin-top: 20px;">Camp Activities (in coordination with Mediciti Hospitals):</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Medical checkups and diagnosis</li>
                <li>Dispensing medicines</li>
                <li>Referrals for specialized care at hospitals</li>
                <li>Referrals to diagnostic labs (fees reimbursed by the organization)</li>
                <li>Counseling services</li>
            </ul>

            <h4 style="margin-top: 20px;">Achievements:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>20,000 people treated</li>
                <li>500 patients received counseling</li>
            </ul>`
        },
        'care-support-4': {
            title: 'HEALTH AND HYGIENE :  ',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634501/8da29ae09fff19e8271a3a40c0fe6421_rqbkmp.jpg',
            title1:"",
            p1: `ARUNODAYA TRUST addresses poor sanitation and hygiene in rural areas, 
focusing on preventive care and health awareness like reproductive health, 
immunization, and AIDS awareness. We deliver healthcare through mobile 
units, especially where government services are lacking. 
In collaboration with public and private organizations, we provide clean water, 
sanitation, and conduct health camps like eye checkups, general screenings, 
and blood donations.`,
            p2: `Your support is crucial to continuing our work, including maintaining our free 
ambulance service. Help us ensure better health for the underprivileged!`,
        },
        'care-support-5': {
            title: 'ALCOHOL AND DRUG ABUSE : ',
            image: 'https://res.cloudinary.com/dfthj0xyu/image/upload/v1742874903/WhatsApp_Image_2025-03-24_at_21.26.06_1285b82e_kvjnor.jpg',
            title1: "",
            p1: `Teen drug and alcohol abuse is common and can have serious consequences. 
In the 15-24 age group, 50% of deaths (accidents, homicides, suicides) involve 
substance abuse. It also contributes to physical and sexual aggression like 
assault or rape. 

Teens go through stages: abstinence, experimentation, regular use, abuse, 
and dependency. Regular use often leads to anxiety, depression, and other 
issues. Tobacco and alcohol can act as gateway drugs to substances like 
marijuana or heroin. 

Teens with a family history of abuse or poor social skills are at higher risk.`,
            ul: `<h4 style="margin-top: 20px;">Signs include:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Decline in school performance</li>
                <li>New friend groups</li>
                <li>Delinquent behavior</li>
                <li>Family conflicts</li>
            </ul>
            <p style="margin-top: 15px;">Physical signs: red eyes, persistent cough, and changes in eating or sleeping 
habits. Dependency can result in blackouts, withdrawal, and more severe 
problems.</p>`
        },
        'care-support-6': {
            title: 'TOBACCO ABUSE :',
            image: 'https://res.cloudinary.com/dfthj0xyu/image/upload/v1742874904/WhatsApp_Image_2025-03-24_at_21.32.52_65bbf6af_n4npng.jpg',
            title1:"",
            p1: `Tobacco smoking is a major cause of respiratory and cardiovascular diseases, 
with 90% of lung cancer and peripheral vascular disease cases linked to 
smoking. Despite severe health risks, quitting is difficult due to environmental and 
genetic factors. Arunodaya Trust addresses this through seminars, awareness 
programs, and village dramas. Nicotine addiction stems from adrenaline's 
short-lived "buzz," leading to dependence. Smokers build tolerance, requiring 
more nicotine over time. Tobacco companies have intensified nicotine delivery, 
making quitting especially challenging, particularly for teens and frequent users.`,

        },
        'care-support-7': {
            title: 'TB & Malaria Prevention',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634496/4b46ee69c7f2b7cecf402bcbc91eb08e_uzcyxr.jpg',
            title1:"",
            p1: ` 
Urban environments, especially among the poor, pose significant public health 
challenges, particularly for TB, HIV/AIDS, and malaria. Prevention and control 
systems need to adapt to reach vulnerable populations effectively, ensuring that 
those at high risk receive the care they need`,
         
        },
        'care-support-8': {
            title: 'WORLD AIDS DAY :',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634493/1_tknwxr.webp',
            title1:"",
            p1: `Getting to ZERO 
The global aim is zero new infections, zero AIDS-related deaths, and zero 
stigma and discrimination. Since 2000, when the UN Millennium Declaration 
acknowledged the importance of combating HIV/AIDS, significant progress has 
been made. MDG 6 set the target to reverse the AIDS epidemic, and over time, 
AIDS-related deaths and new infections have declined. 
Despite this progress, the fight against AIDS continues. More people are now 
receiving life-saving treatment, reducing new infections and deaths. Collective 
efforts from governments, international communities, researchers, and civil 
society are bringing the world closer to the goal of zero new HIV infections and 
ending the epidemic.`,
         
        },
       
        
        // Education Projects
        'education-1': {
            title: 'Education Support Program :',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634494/13ba088cecb28a1fae02c50a0144c24d_dak6sz.jpg',
            title1:"",
            p1: `Arunodaya Trust's Mission Education, part of Smile Foundation's national initiative, aims 
to provide basic education and healthcare to underprivileged children in Shamirpet, 
Ghatkesar, Nagaram, and Malkajgiri mandals. Education empowers individuals to 
improve their livelihoods and awareness on key issues like healthcare and social 
behavior. The program focuses on children in difficult circumstances—child laborers, 
those affected by HIV/AIDS, street children, and slum dwellers. Special attention is given 
to girl and women education to empower families. Smile Foundation offers pre-school, 
non-formal, remedial, and bridge courses for children aged 3-18.`,
        },
        'education-2': {
            title: 'BECAUSE I AM A GIRL PROGRAM : ',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634504/b7e1a006b2be9dda05184824091e42ab_v2abzk.jpg',
            title1: "",
            p1: `Girls in the poorest regions face significant disadvantages—denied education, 
malnourished, and living in poverty—simply due to their gender. Yet, investing in girls 
leads to benefits for families, communities, and economies. Educated girls are key to 
lifting themselves and others out of poverty.`,
            ul: `<h4 style="margin-top: 20px;">Key Facts on Girls' Education:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Each extra school year can raise a girl's income by 15-25%.</li>
                <li>Child survival increases by 20% when mothers control household income.</li>
                <li>10% more girls in school boosts a country's GDP by 3%.</li>
                <li>More education reduces child marriage and improves child health and schooling.</li>
                <li>A mother's education cuts infant mortality by 5-10% per year of schooling.</li>
            </ul>`
        },
        'education-3': {
            title: 'RIGHT TO EDUCATION AWARENESS PROGRAM : ',
            image: 'https://res.cloudinary.com/dfthj0xyu/image/upload/v1742874903/WhatsApp_Image_2025-03-24_at_21.33.58_dfe567e7_xxvjp3.jpg',
            title1:"",
            p1: `Education is vital for a country's development, and India's Right to Education Act (RTE) 
of 2009 guarantees free, compulsory education for children aged 6 to 14 under Article 
21A. The Act makes education a fundamental right, mandates enrollment and 
attendance, and requires private schools to reserve 25% of seats for disadvantaged 
children. However, 81.5 lakh children remain out of school, with 75% never attending, 
and three years after RTE's passage, 50% of slum families were unaware of it. 
Awareness of government schemes for girls also remains low. `,
            
        },
        'education-4': {
            title: 'WATER, SANITATION, HEALTH AND HYGIENE IN SCHOOLS : ',
            image: 'https://res.cloudinary.com/dfthj0xyu/image/upload/v1742874903/WhatsApp_Image_2025-03-24_at_21.35.51_88c641de_hb1td9.jpg',
            title1:"",
            p1: `The WASH (Water, Sanitation, and Hygiene) in Schools program aims to improve 
children's health and learning by reducing water and sanitation-related diseases. By 
providing safe drinking water, sanitation facilities, and hygiene education, schools can 
promote healthy behaviors and contribute to achieving the Millennium Development 
Goals (MDGs) related to education, child mortality, water, sanitation, and gender 
equality. `,
            p2: `Arunodaya Trust’s WASH in 10 Schools program emphasizes clean, safe school 
environments, life skills education, and community involvement. The program equips 
students to practice better hygiene, positively influence their families, and improve 
school attendance, especially for girls during menstruation. It also fosters cooperation 
and lifelong hygiene habits for healthier communities.`,
        },
        'education-5': {
            title: 'AASHIRVAD FEEDING PROGRAM :',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634505/IMG_20241126_184555_sckabp.webp',
            title1:"",
            p1: `Remedial programs aim to close the gap between a student’s current knowledge and 
expected skills, focusing on reading or math. Many students, such as the 65% of fourth 
graders who aren’t proficient in reading, need extra support. 
Arunodaya Trust's after-school programs provide children and teens with nutritious 
meals, safe activities, and learning opportunities. With 900 million people globally facing 
hunger, and 16,000 children dying from hunger-related causes daily, the need is urgent. 
Arunodaya’s "Hand of Hope" provides over 75 meals regularly to combat hunger and 
support children in need`,
            
        },
        'education-6': {
            title: 'ENVIRONMENT ASSESSMENT PROGRAM :',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634494/0_7_zuemb0.jpg',
            title1: "",
            p1: `ARUNODAYA TRUST prioritizes sustainability and profitability in agriculture, recognizing 
it as the essential profession that feeds the nation. Partnering with the Deccan 
Development Society, it supports NEAC themes from the Department of Environment. 
This year's focus is on drought prevention awareness, as proposed by the Ministry of 
Environment & Forest.`,
            ul: `<h4 style="margin-top: 20px;">Key activities include:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Village-level meetings on food security in 5 villages.</li>
                <li>Training farmers on bio pesticide preparation and biodiversity protection.</li>
                <li>Encouraging pulse production for food security.</li>
                <li>School awareness on tree protection and pollution prevention.</li>
                <li>Pamphlet distribution on biodiversity protection.</li>
            </ul>`
        },
        'education-7': {
            title: 'PROVISION OF SAFE DRINKING WATER : ',
            image: 'https://res.cloudinary.com/dfthj0xyu/image/upload/v1742874902/WhatsApp_Image_2025-03-24_at_21.34.38_2332f56a_cpdqje.jpg',
            title1: "",
            p1: `Rural areas face severe drinking water issues due to depleting groundwater, pollution 
from chemical fertilizers, and unhygienic water handling practices, leading to various 
diseases and financial losses for poorer communities. This project, initiated in 
Rangareddy and expanded to Nalgonda, Karimnagar, and Mahabubnagar districts, 
addresses these concerns.`,
            p2: `Key actions include identifying villages for establishing Safe Water Plants (SWPs), 
conducting community meetings, providing loans for SWP setups, training operators, 
and promoting water-health awareness in the villages.`,
            ul: `<h4 style="margin-top: 20px;">Objectives:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Raise awareness about health and safe drinking water usage.</li>
                <li>Support the establishment of SWPs for long-term sustainability.</li>
            </ul>

            <h4 style="margin-top: 20px;">Core activities:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Identify local water sources and suitable operators for SWPs.</li>
                <li>Provide water treatment technology and raise awareness on safe water use.</li>
            </ul>

            <h4 style="margin-top: 20px;">Expected impact:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Sustainable access to safe drinking water.</li>
                <li>Improved health, reduced waterborne diseases, better school attendance, and 
more agricultural laborers using treated water at work.</li>
            </ul>`
        },
       
        // Social Causes
        'social-1': {
            title: 'ORPHAN :  ',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634506/IMG_20241126_184602_lobvxt.webp',
            
            title1:"",
            p1: "Not Alone is Arunodaya Trust's flagship program, empowering nearly 42 children across  Telangana, with 20 enrolled in 2016 alone. The program focuses on enhancing children's  academic achievements, building well-rounded personalities, and fostering volunteerism,  helping fatherless children break the cycle of poverty. Through home visits, life-skills workshops,  and community activities, the staff forge long-term relationships with the children they serve.",
            p2: "A notable example is Bhargav, an HIV+ child who lost both parents and faced extreme hardship. Thanks to the support from Arunodaya, Bhargav received life-saving medication and was adopted. Today, he is thriving, attending school, playing sports, and looking forward to a bright future.",
        },
        'social-2': {
            title: 'Nourishment for the Homeless : ',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634512/old_Age_Home_zq4skc.webp',
            title1:"",
            p1: 'Hunger affects one in eight women, men, and children worldwide, with nearly a billion young people projected to face poverty by 2025 due to hunger and malnutrition. It remains the leading cause of death globally, with 820 million people suffering from chronic hunger. ',
            p2: 'In response, Arunodaya Trust conducted 72 poor feeding programs throughout the year across 22 slums in Hyderabad and Secunderabad, aiming to alleviate hunger and provide vital nourishment to those in need.'
        },
        'social-3': {
            title: 'AFTER SCHOOL EDUCATION AND FEEDING:',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634505/IMG_20241126_184555_sckabp.webp',
            title1:"",
            p1: `We aim to bring hope to children and families by providing nourishment and education 
while sharing God's love. Many children in our care come from neglected or abusive 
homes, extreme poverty, or families struggling with disabilities or prostitution. For some, 
the education and meals they receive at our centers are a lifeline. `,
            p2: `We aim to bring hope to children and families by providing nourishment, education, and 
sharing God's love. Many children in our care come from neglected homes, extreme 
poverty, or families facing disabilities or prostitution. For some, the meals and education 
they receive are a lifeline. Our outreach extends to parents, leading to positive changes 
in entire communities. Simple meals like rice and beans are transforming lives. Bhavya, 
a 3-year-old from Secunderabad, has seen improved health and a brighter future since 
joining our feeding center, easing his family's struggles.`   
           
        },
        
        // Livelihoods
        'livelihoods-1': {
            title: 'SMILE TWIN E LEARNING PROGRAM :',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634503/966dea78f1cfd7a4204b96bee348db10_as3frw.jpg',
            title1: "",
            p1: `Since 2008, Arunodaya Trust has been working in Balaji Nagar, Jawahar Nagar, Ranga 
Reddy District, supporting 1.5 lakh people, primarily living below the poverty line. The 
Smile Twin E-Learning Programme (STEP) offers training in English, personality 
development, computer skills, and retail management, empowering youth to secure 
jobs and become the primary earners in their families, thereby improving their living 
conditions.`,
            ul: `<h4 style="margin-top: 20px;">Key objectives include:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Educating and motivating individuals to assist the needy.</li>
                <li>Running social service schemes and collaborating with government agencies.</li>
                <li>Establishing trade cells and providing medical aid, food, clothing, and shelter to those in need.</li>
            </ul>`
        },
        'livelihoods-2': {
            title: 'AGRICULTURE AND NATURAL RESOURCE MANAGEMENT : ',
            image: 'https://res.cloudinary.com/dfthj0xyu/image/upload/v1742874904/WhatsApp_Image_2025-03-24_at_21.37.49_293cdad3_tfrzke.jpg',
            title1:"",
            p1: `Arunodaya Trust operates in rainfed ecosystems, which provide food and 
employment to over 60% of India’s population. The agricultural sector has faced 
severe crises due to low investments, resulting in a declining GDP and 
widespread farmer suicides, burdening women and children. The government's 
recent budget emphasizes empowering farmers and addressing Sustainable 
Development Goals (SDG) 1, 2, 10, 13, and 15. In response, Arunodaya Trust 
has adopted a Watershed approach to enhance land, water, vegetation, and 
livelihoods, with a strong focus on gender equality and women's participation, 
particularly in dryland agriculture. 
`,
        },
        'livelihoods-3': {
            title: 'REBUILDING LIVELIHOODS OF VICTIMS OF SEXUAL EXPLOITATION AND TRAFFICKING :',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634495/42178b463d8b959e0b6e1ce09a80e53d_v2g86q.jpg',
            title1: "",
            p1: `Core activities of this project include:`,
            ul: `<ul style="list-style-type: disc; padding-left: 20px;">
                <li>Forming livelihood groups with five VOCSETs (Victims of Commercial 
Sexual Exploitation and Trafficking) from the same area.</li>
                <li>Identifying livelihood opportunities based on group members' skills.</li>
                <li>Providing vocational and life skills training.</li>
                <li>Conducting workshops on business planning, market feasibility, and 
accessing financial resources for self-employment.</li>
            </ul>
            <h4 style="margin-top: 20px;">Key achievements:</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Project office established in Rangareddy, with 13 identified hotspots.</li>
                <li>145 orientation meetings held for Joint Liability Groups (JLGs).</li>
                <li>Functional relations with APSACS and 12 local banks for JLG account 
setup.</li>
                <li>725 members across 145 groups have been formed.</li>
            </ul>`,
            p2: `Impact: VOCSETs in 13 hotspots have gained awareness and joined JLGs, 
helping rebuild their livelihoods.`,
        },
        'livelihoods-4': {
            title: 'VOCATIONAL TRAINING : ',
            image: 'https://res.cloudinary.com/dxnlxrkmg/image/upload/v1742634500/8248e714805009003c7d6d85fc6c0f58_yi9r9r.jpg',
            title1:"",
            p1: `Since 2008, ARUNODAYA TRUST has been empowering youth through 
vocational training in trades such as Motor Rewinding, Medical Lab 
Technology, Fashion Designing, Masonry, Computer Hardware, and more. 
These programs enable participants to start businesses or secure employment, 
improving their living conditions. 
Currently, 240 adolescent girls are being trained in Fashion Designing at the 
Guntur and Secunderabad centers. The trust plans to expand by training an 
additional 200 adolescents, supporting sustainable livelihoods for youth and girls. `,
p2 : "",
        },
        'livelihoods-5': {
            title: 'WOMEN EMPOWERMENT : ',
            image: 'https://res.cloudinary.com/dfthj0xyu/image/upload/v1742874903/6779_tjkncd.avif',
            title1:"",
            p1: ` In India, despite past claims of gender equality, women have long been 
treated as second-class citizens. Modern India still grapples with harmful 
ancient customs alongside modern advancements.`,
p2 : `This stark contrast is 
evident in the frequent incidents of violence against women, including gang 
rapes, acid attacks, domestic violence, dowry-related abuse, and 
harassment. India, ranked as one of the most dangerous countries for 
women, continues to face significant gender discrimination and violence 
despite progress in other areas`,
        },
        'livelihoods-6': {
            title: 'WOMEN ENTREPRENEURSHIP :  ',
            image: 'https://res.cloudinary.com/dfthj0xyu/image/upload/v1742874904/WhatsApp_Image_2025-03-24_at_21.37.08_dd8b0ea3_qrzrqy.jpg',
            title1:"",
            p1: `Women entrepreneurship is a key driver of economic growth, creating jobs 
and offering innovative solutions. However, women still face barriers like 
discriminatory laws, limited access to finance, and restricted mobility. In 
developing countries, these challenges are greater due to poverty and lack of 
access to banking services. Many women are primary earners or caretakers, 
making it difficult to start businesses without support. Access to capital is 
essential for them to transition into entrepreneurship. Governments and 
organizations are promoting women entrepreneurs through various schemes 
to help bridge this gap. `,
p2 : "",
        },
        'livelihoods-7': {
            title: 'YOUTH WELFARE PROGRAM : ',
            image: 'https://res.cloudinary.com/dfthj0xyu/image/upload/v1742874903/WhatsApp_Image_2025-03-24_at_21.39.28_d143690e_vileyq.jpg',
            title1:"",
            p1 : `Youth play a vital role in promoting social awareness and socio-economic 
change. To harness this potential, Empowerment launched Youth Welfare 
Programmes focused on mental, artistic, and physical development through 
English-speaking courses, arts workshops, and vocational training. 
In many Indian villages, poverty and illiteracy persist. `,
p2 : `Arunodaya Trust's Y.E.S. 
schools provide education and training to disadvantaged children, offering them 
opportunities for a brighter future.`,
        },
    };
    
    
    // DOM elements
const contentTitle = document.getElementById('content-title');
const contentTitle1 = document.getElementById('content-title1');
const contentParagraph1 = document.getElementById('content-paragraph-1');
const contentParagraph2 = document.getElementById('content-paragraph-2');
const categoryHeaders = document.querySelectorAll('.category-header');
const projectItems = document.querySelectorAll('.project-item');
const imgElement = document.getElementById('image');

// Function to update content based on project
function updateContent(projectId) {
    const project = projectsData[projectId];
    if (project) {
    contentTitle.textContent = project.title;
    contentParagraph1.textContent = project.p1;

    // Check if 'ul' exists and update the inner HTML
    if (project.ul) {
        contentParagraph2.innerHTML = project.ul;
    } else if (project.p2) {
        contentParagraph2.innerHTML = `<p style="margin-top: 20px;">${project.p2}</p>`;
    } else {
        contentParagraph2.textContent = "";
    }


    // Update the second title if it exists
    if (project.title1) {
        contentTitle1.textContent = project.title1;
    } else {
        contentTitle1.textContent = ''; // Clear title1 if not present
    }

    // Update the image if the URL exists
    if (project.image) {
        imgElement.src = project.image;
        imgElement.alt = project.title;  // Set alt text for accessibility
    } else {
        imgElement.src = '';  // Clear image src if no image is provided
    }

    // Update active class for the selected project item
    projectItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.project === projectId) {
            item.classList.add('active');
        }
    });
    }
}

// Event listeners for project items
projectItems.forEach(item => {
item.addEventListener('click', function() {
const projectId = this.dataset.project;
updateContent(projectId);
});
});

// Toggle category items on both mobile and large devices with smooth transition
categoryHeaders.forEach(header => {
header.addEventListener('click', function() {
// Get the category items associated with the clicked header
const categoryItems = this.nextElementSibling;

// Toggle the visibility of the category items with smooth transition
categoryItems.classList.toggle('show');

// Hide other category items
document.querySelectorAll('.category-items').forEach(items => {
    if (items !== categoryItems) {
        items.classList.remove('show');
    }
});

// Show the first project of the category if no project is already selected
const categoryId = this.dataset.category;
const firstProjectInCategory = document.querySelector(`.project-item[data-project^="${categoryId}"]`);
if (firstProjectInCategory && !document.querySelector('.project-item.active')) {
    updateContent(firstProjectInCategory.dataset.project);
}
});
});

// Initialize with the first project
updateContent('care-support-1');
})