import { useState } from 'react';

const HUMASN =
  {
    "service_version": "2",
    "myhuman": [
      {
        "content_title": "Calcium Channel Blockers",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/fdd5fc68-1d4b-4709-84f5-85c6168bfdba/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": true,
          "is_animated": true
        },
        "content_authored_date": "2023-04-17T16:17:50+00:00",
        "content_id": "57Pq",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=57Pq&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Torn ACL",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/31bdc5e4-673c-41fb-a287-1388be115465/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2023-04-04T12:27:24+00:00",
        "content_id": "56Yr",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=56Yr&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Peroneal Group",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/820b9bb1-c518-4c6b-b4d5-eb12f8f2b4f6/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2023-03-26T08:31:12+00:00",
        "content_id": "55xo",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=55xo&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Male Skeletal System",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/668d3d99-3e0c-4063-923d-f59b16563b9b/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2023-03-07T14:58:45+00:00",
        "content_id": "54dp",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=54dp&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Upper Limb",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/9987a776-a9d1-4da6-b52d-e2a22bbd3881/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2023-02-09T17:53:27+00:00",
        "content_id": "52gy",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=52gy&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "PLRI",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/48db3a81-ee45-45a7-a10e-8c4784721bb3/small/image.jpg",
        "content_flags": {
          "is_quiz": true,
          "is_tour": true,
          "is_animated": false
        },
        "content_authored_date": "2023-02-09T17:11:43+00:00",
        "content_id": "52gm",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=52gm&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Lower Limb",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/54499f79-cad6-49ca-a71b-cba652a1aa33/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2023-01-21T14:28:10+00:00",
        "content_id": "51G4",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=51G4&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Trigger finger",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/5eaf9a3e-ff63-4e0a-826b-327156f6928f/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-10-01T12:36:51+00:00",
        "content_id": "4smM",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4smM&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "golfer elbow",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/c341d5d1-77b6-4fe1-b676-5aa57407161b/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-08-28T14:58:03+00:00",
        "content_id": "4qLM",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4qLM&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Vertebra",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/e4c178fa-3c8e-4f60-9463-63aa1c5c0e4e/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-04-01T17:54:36+00:00",
        "content_id": "4gls",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4gls&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Torn ACL",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/6feb892f-16ee-4f9a-b254-9c3c9865eca7/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-02-07T09:05:43+00:00",
        "content_id": "4cTl",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4cTl&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Stress Fracture",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/7ac5fb31-bbdf-4a95-b855-c333b1f2a11d/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-02-07T09:05:02+00:00",
        "content_id": "4cTk",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4cTk&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Superior Labral Tear",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/955fee09-2519-432b-ac0f-057775b27ea3/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-02-07T09:04:40+00:00",
        "content_id": "4cTh",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4cTh&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Spinal Cord: Cross Section at L1 Level",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/965cb9e5-a3c2-443e-8a44-a7f954c26837/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-02-07T09:03:45+00:00",
        "content_id": "4cTg",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4cTg&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Proximal Tibia Fracture",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/65196628-619d-4103-9c5f-e56cc6afbf54/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-02-07T09:02:34+00:00",
        "content_id": "4cTf",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4cTf&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Meniscal Root Tear",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/ad2507b6-8dce-4d15-9f95-cb41f2ec1804/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-02-07T08:59:36+00:00",
        "content_id": "4cTd",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4cTd&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "L5-S1 Transverse Cross Section",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/13748c0d-2135-46ab-b5e9-6d4ce41dd6af/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-02-07T08:58:11+00:00",
        "content_id": "4cTc",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4cTc&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Gait Cycle",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/6b45952f-e0fe-4a65-91c9-9af7761f1cb9/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": true
        },
        "content_authored_date": "2022-02-07T08:55:12+00:00",
        "content_id": "4cTb",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4cTb&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Flexion and Extension with Torn Achilles Tendon",
        "content_thumbnail_url": "https://human.biodigital.com/media/images/34dfabc4-1fc2-41ab-a163-d54da26d239c/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": true
        },
        "content_authored_date": "2022-02-07T08:54:16+00:00",
        "content_id": "4cTa",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4cTa&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Lower Limb",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/89fad9a3-2dfe-449e-8286-55467e200fba/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2022-01-29T14:05:56+00:00",
        "content_id": "4bug",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4bug&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Chronic Obstructive Pulmonary Disease (COPD)",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/3ac500e8-2744-4745-a1fb-bfee13ba2aef/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": true,
          "is_animated": true
        },
        "content_authored_date": "2022-01-21T14:52:13+00:00",
        "content_id": "4bLW",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4bLW&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Pulmonary Embolism YT video",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/37f3ff80-1b64-4d62-a39d-67e66f10e158/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": true,
          "is_animated": true
        },
        "content_authored_date": "2021-12-10T15:28:53+00:00",
        "content_id": "4ZIE",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4ZIE&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Circle Willis",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/f494cd8b-5c87-49ec-ae7c-f655e9e71b87/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2021-11-27T13:57:33+00:00",
        "content_id": "4YKL",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4YKL&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Circle of Willis",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/media/images/540278bc-12e6-497f-a611-25693eece3a8/small/image.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2021-11-27T13:25:53+00:00",
        "content_id": "4YKI",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4YKI&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Male Complete Anatomy",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/thumbs/bookmarks/4Rty/large/index.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2021-09-04T15:14:44+00:00",
        "content_id": "4Rty",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4Rty&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Torn Patellar Tendon",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/thumbs/bookmarks/4Qlm/large/index.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2021-08-19T17:12:20+00:00",
        "content_id": "4Qlm",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4Qlm&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Upper Limb",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/thumbs/bookmarks/4QkO/large/index.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": true,
          "is_animated": false
        },
        "content_authored_date": "2021-08-19T09:51:14+00:00",
        "content_id": "4QkO",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=4QkO&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "ACL Webinar Anatomy",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/thumbs/bookmarks/3gUr/large/index.jpg",
        "content_flags": {
          "is_quiz": true,
          "is_tour": true,
          "is_animated": false
        },
        "content_authored_date": "2020-08-16T17:35:47+00:00",
        "content_id": "3gUr",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=3gUr&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "COPD in Alveoli",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/thumbs/bookmarks/3fzC/large/index.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2020-08-11T07:06:38+00:00",
        "content_id": "3fzC",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=3fzC&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "ABG sites",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/thumbs/bookmarks/3f1J/large/index.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2020-08-02T18:58:26+00:00",
        "content_id": "3f1J",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=3f1J&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Upper Limb",
        "content_thumbnail_url": "https://human.biodigital.com/thumbs/bookmarks/3dHP/large/index.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": false,
          "is_animated": false
        },
        "content_authored_date": "2020-07-19T18:34:51+00:00",
        "content_id": "3dHP",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=3dHP&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      },
      {
        "content_title": "Osteoarthritis",
        "content_teams": [
          {
            "team_id": "HJ",
            "team_name": "ClinicalPhysio"
          }
        ],
        "content_thumbnail_url": "https://human.biodigital.com/thumbs/bookmarks/3cjU/large/index.jpg",
        "content_flags": {
          "is_quiz": false,
          "is_tour": true,
          "is_animated": false
        },
        "content_authored_date": "2020-07-16T13:23:37+00:00",
        "content_id": "3cjU",
        "content_type": "bookmark",
        "content_accessibility": [
          "personal",
          "team"
        ],
        "content_url": "https://human.biodigital.com/viewer/?be=3cjU&dk=ade1c97a330684304f79430b5049f4bb0a0da7c4"
      }
    ]
  }
export default function IFrameHuman() {
  const [id, setId] = useState(null);
  return (
    <>
      <select name='' id='' onChange={(e) => {
        setId(e.target.value);
      }}>
        {HUMASN.myhuman.sort((a,b) => {
          if(a.content_title < b.content_title) { return -1; }
          if(a.content_title > b.content_title) { return 1; }
          return 0;
        }).map(item => {
          return <option value={item.content_id}>{item.content_title}</option>
        })}
      </select>
    <iframe id='myWidget'
            src={`https://human.biodigital.com/viewer/?dk=ade1c97a330684304f79430b5049f4bb0a0da7c4&be=${id}&ui-info=false&ui-fullscreen=true&ui-tools=true&ui-annotations=true`}
            width='100%'
            height='500px'>
    </iframe>
    </>
  );
}
