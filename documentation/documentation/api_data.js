define({ "api": [
  {
    "group": "AddFavorite",
    "name": "createAddFavorite",
    "type": "POST",
    "url": "/v1/add_favorites",
    "title": "Create",
    "description": "<p>Create User add to favorite</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "students"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "word_id",
            "description": "<p>reference word_id table(hashed_id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n      \"object\": \"AddFavorite\",\n      \"id\": \"6dpbgq5ka0axoe8r\",\n      \"word_id\": \"q3ajep56e08gorlx\",\n      \"user_id\": \"6dpbgq5ka0axoe8r\",\n      \"created_at\": \"2020-12-28T03:32:04.000000Z\",\n      \"updated_at\": \"2020-12-28T03:32:04.000000Z\"\n      },\n      \"meta\": {\n      \"include\": [],\n      \"custom\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/AddFavorite/UI/API/Routes/CreateAddFavorite.v1.private.php",
    "groupTitle": "AddFavorite"
  },
  {
    "group": "AddFavorite",
    "name": "deleteAddFavorite",
    "type": "DELETE",
    "url": "/v1/add_favorites/user_hashed_id?searchFields=id:favorite_hashed_id",
    "title": "Delete",
    "description": "<p>user_hashed_id and favorite_id have to provided</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "students"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // Insert the response of the request here...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/AddFavorite/UI/API/Routes/DeleteAddFavorite.v1.private.php",
    "groupTitle": "AddFavorite"
  },
  {
    "group": "AddFavorite",
    "name": "findAddFavoriteById",
    "type": "GET",
    "url": "/v1/add_favorites/user_hashed_id?searchFields=id:favorite_hashed_id",
    "title": "find_by_id",
    "description": "<p>{GET} /v1/add_favorites/user_hashed_id find_all</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "students"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n  {\n    \"object\": \"AddFavorite\",\n    \"id\": \"azkvml597yxe8b9j\",\n    \"word_id\": \"6dpbgq5ka0axoe8r\",\n    \"user_id\": \"6dpbgq5ka0axoe8r\",\n    \"created_at\": \"2020-12-28T03:13:12.000000Z\",\n    \"updated_at\": \"2020-12-28T03:13:12.000000Z\"\n  }\n  ],\n    \"meta\": {\n    \"include\": [],\n    \"custom\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/AddFavorite/UI/API/Routes/FindAddFavoriteById.v1.private.php",
    "groupTitle": "AddFavorite"
  },
  {
    "group": "AddFavorite",
    "name": "updateAddFavorite",
    "type": "PATCH",
    "url": "/v1/add_favorites/user_hashed_id?searchFields=id:favorite_hashed_id",
    "title": "update",
    "description": "<p>update</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "word_id",
            "description": "<p>hashed_word_id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  return 1 when there have updated word else return 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/AddFavorite/UI/API/Routes/UpdateAddFavorite.v1.private.php",
    "groupTitle": "AddFavorite"
  },
  {
    "group": "Admin_authentication",
    "name": "ChangePassword",
    "type": "POST",
    "url": "/v1/change_password",
    "title": "change password",
    "description": "<p>Change admin password</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new-password",
            "description": "<p>'required|min:6|max:30'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>required|min:6|max:30'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\n{\n  \"message\": \"The given data was invalid.\",\n  \"errors\": {\n  \"password\": [\n    \"The selected password is invalid.\"\n  ]\n  }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"data\": {\n    \"object\": \"User\",\n    \"id\": \"azkvml597yxe8b9j\",\n    \"name\": \"Super Admin\",\n    \"email\": \"soemsamrach15@kit.edu.kh\",\n    \"confirmed\": true,\n    \"nickname\": null,\n    \"gender\": null,\n    \"birth\": null,\n    \"status\": \"active\",\n    \"social_auth_provider\": null,\n    \"social_id\": null,\n    \"social_avatar\": {\n      \"avatar\": null,\n      \"original\": null\n  },\n    \"created_at\": \"2020-12-28T02:00:26.000000Z\",\n    \"updated_at\": \"2020-12-28T02:04:58.000000Z\",\n    \"readable_created_at\": \"4 minutes ago\",\n    \"readable_updated_at\": \"1 second ago\",\n    \"real_id\": 1,\n    \"deleted_at\": null\n  },\n  \"meta\": {\n    \"include\": [\n      \"roles\"\n    ],\n    \"custom\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/changePassword.v1.private.php",
    "groupTitle": "Admin_authentication"
  },
  {
    "group": "Admin_authentication",
    "name": "LoginPasswordGrant",
    "type": "post",
    "url": "/v1/oauth/token",
    "title": "Login (Password Grant)",
    "description": "<p>Login Users using their username and passwords. (For First-Party Clients)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>must be <code>password</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>you can leave it empty</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token_type\": \"Bearer\",\n  \"expires_in\": 315360000,\n  \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbG...\",\n  \"refresh_token\": \"Oukd61zgKzt8TBwRjnasd...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Authentication/UI/API/Routes/LoginUsingPasswordGrant.v1.private.php",
    "groupTitle": "Admin_authentication"
  },
  {
    "group": "Admin_authentication",
    "name": "Logout",
    "type": "DELETE",
    "url": "/v1/logout",
    "title": "Logout",
    "description": "<p>User Logout. (Revoking Access Token)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 Accepted\n{\n  \"message\": \"Token revoked successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Authentication/UI/API/Routes/Logout.v1.public.php",
    "groupTitle": "Admin_authentication"
  },
  {
    "group": "Admin_authentication",
    "name": "password_forgot",
    "type": "POST",
    "url": "/v1/password/forgot",
    "title": "password_forgot",
    "description": "<p>It will send an email to admin email</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email have to exist in database</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reseturl",
            "description": "<p>is the front-end reset url link</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 202 Accepted\n\n {\n    return please check your email\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422Unprocessable Entity\n\n{\n  \"message\": \"The given data was invalid.\",\n  \"errors\": {\n  \"email\": [\n    \"The selected email is invalid.\"\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/ForgotPassword.v1.public.php",
    "groupTitle": "Admin_authentication"
  },
  {
    "group": "Admin_authentication",
    "name": "password_reset",
    "type": "POST",
    "url": "/v1/password/reset",
    "title": "password_reset",
    "description": "<p>password/reset admin</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>'email|required:6|max:255|exist:users, email'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>'required|max:255', expired 60mn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>'required|min:6|max:255'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>'required|min:6|max:255'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n\n {\n    return Success\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    return Token expired\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/ResetPassword.v1.public.php",
    "groupTitle": "Admin_authentication"
  },
  {
    "group": "BatchFiles",
    "name": "GetAllDuplicatedData",
    "type": "GET",
    "url": "/v1/get_all_duplicated_data",
    "title": "Get_all_duplicated_data",
    "description": "<p>This will list out all duplicated data inside database</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>None</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Has_duplicated-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n    \"id\": 2005,\n    \"category_id\": 1,\n    \"version\": 6,\n    \"hiragana\": \"おめしあがりください\",\n    \"alphabet\": \"\",\n    \"chinese_character\": \"お召し上がりください\",\n    \"khmer\": \"お召し上がりください\",\n    \"example_japanese\": [\n        \"遠慮なく、どうぞたくさんお召し上がりください。\"\n    ],\n    \"example_khmer\": [\n        \"\"\n    ],\n    \"sound_stored_path\": null,\n    \"sound_name\": null,\n    \"sound_url\": null,\n    \"copy_right\": \"copy_right\",\n    \"created_at\": null,\n    \"updated_at\": null,\n    \"deleted_at\": null\n    }\n]",
          "type": "json"
        },
        {
          "title": "None_duplicated-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   return 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/BatchFiles/UI/API/Routes/GetAllDuplicatedData.v1.private.php",
    "groupTitle": "BatchFiles"
  },
  {
    "group": "BatchFiles",
    "name": "Remove_all_duplicated_data",
    "type": "GET",
    "url": "/v1/to_remove_all_duplicated_data",
    "title": "Remove all duplicated data",
    "description": "<p>When there are no duplicated data, it will return 0, else it will return number of duplicated number</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>None</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Has_duplicated-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   return number_of_duplicated_data\n}",
          "type": "json"
        },
        {
          "title": "No_duplicated-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  return 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/BatchFiles/UI/API/Routes/RemoveAllDuplicatedData.v1.private.php",
    "groupTitle": "BatchFiles"
  },
  {
    "group": "BatchFiles",
    "name": "createBatchFiles",
    "type": "POST",
    "url": "/v1/batch_files_audio",
    "title": "CreateAudio",
    "description": "<p>Sound name will be referenced the word_id. It will list the uploaded sound array that not matched the word_id in db, else it will return status matched</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sound_name",
            "description": "<p>name of the uploaded file to s3</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sound_stored_path",
            "description": "<p>sound_stored_path of the uploaded file to s3</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sound_url",
            "description": "<p>sound_url of the uploaded file to s3</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\napiDescription It will display the staus of matched data\n\n\n{\n    All data are matched\n}",
          "type": "json"
        },
        {
          "title": "Not_Matched-Response:",
          "content": "HTTP/1.1 200 OK\napiDescription It will display all missed-matched words_id and sound name\n\n\n[\n  {\n    \"sound_name\": \"110000.mp3\",\n    \"sound_stored_path\": \"minami_sound_dictionary/2.png\",\n    \"sound_url\": \"https://minami-dictionary-sound.s3-ap-southeast-1.amazonaws.com/minami_sound_dictionary/2.png\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/BatchFiles/UI/API/Routes/CreateBatchFilesAudios.v1.private.php",
    "groupTitle": "BatchFiles"
  },
  {
    "group": "BatchFiles",
    "name": "createBatchFilesCSV",
    "type": "POST",
    "url": "/v1/batch_files_csv",
    "title": "CreateCSV",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>file must format of csv, it should less than 10000 rows of data</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 create\n\n\n{\n    will return list of data base on pagination limit\n}",
          "type": "json"
        },
        {
          "title": "error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\n\n  {\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n      \"file\": [\n          \"The file must be a file of type: csv, txt.\"\n      ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/BatchFiles/UI/API/Routes/CreateBatchFilesCSV.v1.private.php",
    "groupTitle": "BatchFiles"
  },
  {
    "group": "Category",
    "name": "createCategory",
    "type": "POST",
    "url": "/v1/categories",
    "title": "Create",
    "description": "<p>This will create category word for the system, which has three type of language (KH, JP, EN), all field have to unique in database</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name_english",
            "description": "<p>category in English</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name_jp",
            "description": "<p>category in Japanese</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>url image of each category word</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n{\n  \"data\": {\n      \"object\": \"Category\",\n      \"id\": \"6dpbgq5ka0axoe8r\",\n      \"name_english\": \"name_english1\",\n      \"name_khmer\": \"name_khmer1\",\n      \"name_jp\": \"name_jp1\",\n      \"image_url\": \"image_url1\",\n      \"created_at\": \"2020-12-26T04:59:32.000000Z\",\n      \"updated_at\": \"2020-12-26T04:59:32.000000Z\",\n      \"real_id\": 2\n    },\n    \"meta\": {\n      \"include\": [],\n      \"custom\": []\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"message\": \"The given data was invalid.\",\n  \"errors\": {\n    \"name_english\": [\n      \"The name english has already been taken.\"\n    ],\n    \"name_khmer\": [\n      \"The name khmer has already been taken.\"\n    ],\n    \"name_jp\": [\n      \"The name jp has already been taken.\"\n    ],\n    \"image_url\": [\n      \"The image url has already been taken.\"\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Category/UI/API/Routes/CreateCategory.v1.private.php",
    "groupTitle": "Category"
  },
  {
    "group": "Category",
    "name": "deleteAllCategory",
    "type": "DELETE",
    "url": "/v1/delete_all_category",
    "title": "delete all category",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>category id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"Products Deleted successfully.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n  {\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n    \"0.id\": [\n    \"The selected 0.id is invalid.\"\n    ],\n    \"1.id\": [\n    \"The selected 1.id is invalid.\"\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Category/UI/API/Routes/DeleteAllCategory.v1.private.php",
    "groupTitle": "Category"
  },
  {
    "group": "Category",
    "name": "deleteCategory",
    "type": "DELETE",
    "url": "/v1/categories/:hashed_id",
    "title": "Delete",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  return 1\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 417Expectation Failed\n\n{\n  \"message\": \"Failed to delete Resource.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Category/UI/API/Routes/DeleteCategory.v1.private.php",
    "groupTitle": "Category"
  },
  {
    "group": "Category",
    "name": "findCategoryById",
    "type": "GET",
    "url": "/v1/categories/:id",
    "title": "Get_by_id",
    "description": "<p>ID have to hashed</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hashed_id",
            "description": "<p>ID have to be hashed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n      \"object\": \"Category\",\n      \"id\": \"6dpbgq5ka0axoe8r\",\n      \"name_english\": \"name_english1\",\n      \"name_khmer\": \"name_khmer1\",\n      \"name_jp\": \"name_jp14\",\n      \"image_url\": \"image_url2s\",\n      \"created_at\": \"2020-12-26T04:59:32.000000Z\",\n      \"updated_at\": \"2020-12-27T06:27:48.000000Z\",\n      \"real_id\": 2\n      },\n      \"meta\": {\n        \"include\": [],\n        \"custom\": []\n    }\n}",
          "type": "json"
        },
        {
          "title": "Not_found-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"data\": [],\n  \"meta\": {\n    \"include\": [],\n    \"custom\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Category/UI/API/Routes/FindCategoryById.v1.private.php",
    "groupTitle": "Category"
  },
  {
    "group": "Category",
    "name": "getAllCategories",
    "type": "GET",
    "url": "/v1/categories",
    "title": "Get_all",
    "description": "<p>list out all word base on pagination</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin, students"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "none",
            "description": "<p>none</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"data\": [\n    {\n      \"object\": \"Category\",\n      \"id\": \"6dpbgq5ka0axoe8r\",\n      \"name_english\": \"name_english1\",\n      \"name_khmer\": \"name_khmer1\",\n      \"name_jp\": \"name_jp14\",\n      \"image_url\": \"image_url2s\",\n      \"created_at\": \"2020-12-26T04:59:32.000000Z\",\n      \"updated_at\": \"2020-12-27T06:27:48.000000Z\",\n      \"real_id\": 2\n    }\n  ],\n  \"meta\": {\n    \"include\": [],\n    \"custom\": [],\n    \"pagination\": {\n      \"total\": 1,\n      \"count\": 1,\n      \"per_page\": 10,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": {}\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Category/UI/API/Routes/GetAllCategories.v1.private.php",
    "groupTitle": "Category"
  },
  {
    "group": "Category",
    "name": "updateCategory",
    "type": "PATCH",
    "url": "/v1/categories/:hashed_id",
    "title": "update",
    "description": "<p>update every field have to be unique</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name_english",
            "description": "<p>category in English unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name_jp",
            "description": "<p>category in Japanese unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>url image of each category word unique</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n    \"name_english\": [\n        \"The name english has already been taken.\"\n    ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"data\": {\n      \"object\": \"Category\",\n      \"id\": \"6dpbgq5ka0axoe8r\",\n      \"name_english\": \"name_english1\",\n      \"name_khmer\": \"name_khmer1\",\n      \"name_jp\": \"name_jp14\",\n      \"image_url\": \"image_url2s\",\n      \"created_at\": \"2020-12-26T04:59:32.000000Z\",\n      \"updated_at\": \"2020-12-27T06:27:48.000000Z\",\n      \"real_id\": 2\n      },\n      \"meta\": {\n      \"include\": [],\n      \"custom\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Category/UI/API/Routes/UpdateCategory.v1.private.php",
    "groupTitle": "Category"
  },
  {
    "group": "QuizletUrl",
    "name": "createQuizletUrl",
    "type": "POST",
    "url": "/v1/quizlet_urls",
    "title": "Create",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quizlet_url",
            "description": "<p>url data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exercise_name",
            "description": "<p>name of each exercise</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"message\": \"The given data was invalid.\",\n  \"errors\": {\n  \"exercise_name\": [\n    \"The exercise name has already been taken.\"\n  ]\n}\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"data\": {\n    \"object\": \"QuizletUrl\",\n    \"id\": \"6dpbgq5ka0axoe8r\",\n    \"quizlet_url\": \"quizlet_url2\",\n    \"exercise_name\": \"exercise_name2\",\n    \"created_at\": \"2020-12-28T01:21:38.000000Z\",\n    \"updated_at\": \"2020-12-28T01:21:38.000000Z\",\n    \"real_id\": 2\n    },\n  \"meta\": {\n  \"include\": [],\n    \"custom\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/QuizletUrl/UI/API/Routes/CreateQuizletUrl.v1.private.php",
    "groupTitle": "QuizletUrl"
  },
  {
    "group": "QuizletUrl",
    "name": "deleteAllQuizletUrl",
    "type": "DELETE",
    "url": "/v1/delete_all_quizlet_url",
    "title": "delete all quizlet url",
    "description": "<p>delete all quizlet url</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Quizlet id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n  \"success\": \"Products Deleted successfully.\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"message\": \"The given data was invalid.\",\n  \"errors\": {\n  \"0.id\": [\n  \"The selected 0.id is invalid.\"\n  ],\n  \"1.id\": [\n  \"The selected 1.id is invalid.\"\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/QuizletUrl/UI/API/Routes/DeleteAllQuizlet.v1.private.php",
    "groupTitle": "QuizletUrl"
  },
  {
    "group": "QuizletUrl",
    "name": "deleteQuizletUrl",
    "type": "DELETE",
    "url": "/v1/quizlet_urls/:id",
    "title": "Delete",
    "description": "<p>ID have to be hashed</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>ID of data have to be hashed in url parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  return 1\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 417 Expectation Failed\n{\n    App\\Ship\\Exceptions\\DeleteResourceFailedException: Failed to delete Resource. in file\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/QuizletUrl/UI/API/Routes/DeleteQuizletUrl.v1.private.php",
    "groupTitle": "QuizletUrl"
  },
  {
    "group": "QuizletUrl",
    "name": "findQuizletUrlById",
    "type": "GET",
    "url": "/v1/quizlet_urls/:Hashed_id",
    "title": "Get by ID",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>provided ID have to hashed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"object\": \"QuizletUrl\",\n    \"id\": \"mdjw8454a5xb39pq\",\n    \"quizlet_url\": \"quizlet_url2\",\n    \"exercise_name\": \"exercise_name2\",\n    \"created_at\": \"2020-12-28T01:27:19.000000Z\",\n    \"updated_at\": \"2020-12-28T01:27:19.000000Z\",\n    \"real_id\": 3\n    },\n    \"meta\": {\n    \"include\": [],\n      \"custom\": []\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n\n {\n      return \"message\": \"The requested Resource was not found.\",\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/QuizletUrl/UI/API/Routes/FindQuizletUrlById.v1.private.php",
    "groupTitle": "QuizletUrl"
  },
  {
    "group": "QuizletUrl",
    "name": "getAllQuizletUrls",
    "type": "GET",
    "url": "/v1/quizlet_urls",
    "title": "Get all",
    "description": "<p>List out all data of category</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin, students"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n          \"object\": \"QuizletUrl\",\n          \"id\": \"azkvml597yxe8b9j\",\n          \"quizlet_url\": \"quizlet_url1\",\n          \"exercise_name\": \"exercise_name\",\n          \"created_at\": \"2020-12-25T07:49:13.000000Z\",\n          \"updated_at\": \"2020-12-26T03:36:19.000000Z\",\n          \"real_id\": 1\n        },\n        {\n          \"object\": \"QuizletUrl\",\n          \"id\": \"mdjw8454a5xb39pq\",\n          \"quizlet_url\": \"quizlet_url2\",\n          \"exercise_name\": \"exercise_name2\",\n          \"created_at\": \"2020-12-28T01:27:19.000000Z\",\n          \"updated_at\": \"2020-12-28T01:27:19.000000Z\",\n          \"real_id\": 3\n        }\n    ],\n    \"meta\": {\n    \"include\": [],\n    \"custom\": [],\n    \"pagination\": {\n      \"total\": 2,\n      \"count\": 2,\n      \"per_page\": 10,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": {}\n    }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/QuizletUrl/UI/API/Routes/GetAllQuizletUrls.v1.private.php",
    "groupTitle": "QuizletUrl"
  },
  {
    "group": "QuizletUrl",
    "name": "updateQuizletUrl",
    "type": "PATCH",
    "url": "/v1/quizlet_urls/:hashed_id",
    "title": "Update",
    "description": "<p>ID have to be hashed</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\n{\n  \"message\": \"The given data was invalid.\",\n  \"errors\": {\n    \"quizlet_url\": [\n        \"The quizlet url has already been taken.\"\n      ]\n  }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"object\": \"QuizletUrl\",\n    \"id\": \"mdjw8454a5xb39pq\",\n    \"quizlet_url\": \"quizlet_urls1\",\n    \"exercise_name\": \"exercise_name\",\n    \"created_at\": \"2020-12-28T01:27:19.000000Z\",\n    \"updated_at\": \"2020-12-28T01:33:17.000000Z\",\n    \"real_id\": 3\n  },\n  \"meta\": {\n    \"include\": [],\n    \"custom\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/QuizletUrl/UI/API/Routes/UpdateQuizletUrl.v1.private.php",
    "groupTitle": "QuizletUrl"
  },
  {
    "group": "SearchHistory",
    "name": "createSearchHistory",
    "type": "POST",
    "url": "/v1/search_histories",
    "title": "Create",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "students"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "word_id",
            "description": "<p>have to reference the words id from the word table(hashed_id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // Insert the response of the request here...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/SearchHistory/UI/API/Routes/CreateSearchHistory.v1.private.php",
    "groupTitle": "SearchHistory"
  },
  {
    "group": "SearchHistory",
    "name": "findSearchHistoryById",
    "type": "GET",
    "url": "/v1/search_histories/6hashed_user_id?include=word&searchFields=id:history_id",
    "title": "Search_by_id",
    "description": "<p>{GET} /v1/search_histories/hashed_user_id?include=word SearchAll</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n      {\n      \"object\": \"SearchHistory\",\n      \"id\": \"azkvml597yxe8b9j\",\n      \"user_id\": \"6dpbgq5ka0axoe8r\",\n      \"word_id\": \"azkvml597yxe8b9j\",\n      \"created_at\": \"2020-12-28T00:00:00.000000Z\",\n      \"updated_at\": \"2020-12-28T02:54:56.000000Z\",\n      \"delete_at\": \"2021-01-27T00:00:00.000000Z\",\n      \"word\": {\n      \"data\": [\n          {\n          \"object\": \"Words\",\n          \"id\": \"azkvml597yxe8b9j\",\n          \"version\": 1,\n          \"category_id\": 1,\n          \"hiragana\": \"アース\",\n          \"alphabet\": \"\",\n          \"chinese_character\": \"\",\n          \"khmer\": \"\",\n          \"example_japanese\": [\n          \"\"\n          ],\n          \"example_khmer\": [\n          \"\"\n          ],\n          \"sound_name\": null,\n          \"sound_url\": null,\n          \"copy_right\": \"copy_right\",\n          \"category_name\": null,\n          \"created_at\": null,\n          \"updated_at\": null\n          }\n        ]\n      }\n    }\n  ],\n  \"meta\": {\n  \"include\": [\n  \"word\"\n  ],\n  \"custom\": [],\n  \"pagination\": {\n    \"total\": 1,\n    \"count\": 1,\n    \"per_page\": 10,\n    \"current_page\": 1,\n    \"total_pages\": 1,\n    \"links\": {}\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/SearchHistory/UI/API/Routes/FindSearchHistoryById.v1.private.php",
    "groupTitle": "SearchHistory"
  },
  {
    "group": "SocialAuth",
    "name": "socialAuthFb",
    "type": "post",
    "url": "/v1/auth/facebook",
    "title": "",
    "description": "<p>After getting the User Token from facebook, call this Endpoint passing the user token to it in order to fetch his data and create the user in our database if not exist or return the existing one. For testing purposes use this endpoint <code>auth/facebook</code> to get the token.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "oauth_token",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"object\": \"User\",\n        \"id\": \"eqwja3vw94kzmxr1\",\n        \"name\": \"Mahmoud Zalt\",\n        \"email\": null,\n        \"confirmed\": false,\n        \"nickname\": null,\n        \"gender\": null,\n        \"birth\": null,\n        \"social_auth_provider\": \"facebook\",\n        \"social_id\": \"42719726\",\n        \"social_avatar\": {\n            \"avatar\": null,\n            \"original\": null\n        },\n        \"created_at\": {\n            \"date\": \"2017-10-20 21:45:03.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"UTC\"\n        },\n        \"updated_at\": {\n            \"date\": \"2017-10-20 21:45:03.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"UTC\"\n        },\n        \"readable_created_at\": \"48 minutes ago\",\n        \"readable_updated_at\": \"48 minutes ago\"\n    },\n    \"meta\": {\n        \"include\": [\n            \"roles\"\n        ],\n        \"custom\": {\n            \"token_type\": \"personal\",\n            \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUxI...\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/SocialAuth/UI/API/Routes/AuthenticateAll.v1.private.php",
    "groupTitle": "SocialAuth"
  },
  {
    "group": "VersionData_//_*_@apiName_createVersionData_//_*_//_*_@api_{POST}_/v1/version_data_Endpoint_title_here.._//_*_@apiDescription_Endpoint_description_here.._//_*_//_*_@apiVersion_1.0.0_//_*_@apiPermission_none_//_*_//_*_@apiParam_{String}_parameters_here.._//_*_//_*_@apiSuccessExample_{json}_Success-Response:_//_*_HTTP/1.1_200_OK_//{_//_//_Insert_the_response_of_the_request_here..._//}_//",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/Containers/VersionData/UI/API/Routes/CreateVersionData.v1.private.php",
    "groupTitle": "VersionData_//_*_@apiName_createVersionData_//_*_//_*_@api_{POST}_/v1/version_data_Endpoint_title_here.._//_*_@apiDescription_Endpoint_description_here.._//_*_//_*_@apiVersion_1.0.0_//_*_@apiPermission_none_//_*_//_*_@apiParam_{String}_parameters_here.._//_*_//_*_@apiSuccessExample_{json}_Success-Response:_//_*_HTTP/1.1_200_OK_//{_//_//_Insert_the_response_of_the_request_here..._//}_//",
    "name": ""
  },
  {
    "group": "VersionData_//_*_@apiName_deleteVersionData_//_*_//_*_@api_{DELETE}_/v1/version_data/:id_Endpoint_title_here.._//_*_@apiDescription_Endpoint_description_here.._//_*_//_*_@apiVersion_1.0.0_//_*_@apiPermission_none_//_*_//_*_@apiParam_{String}_parameters_here.._//_*_//_*_@apiSuccessExample_{json}_Success-Response:_//_*_HTTP/1.1_200_OK_//{_//_//_Insert_the_response_of_the_request_here..._//}_//",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/Containers/VersionData/UI/API/Routes/DeleteVersionData.v1.private.php",
    "groupTitle": "VersionData_//_*_@apiName_deleteVersionData_//_*_//_*_@api_{DELETE}_/v1/version_data/:id_Endpoint_title_here.._//_*_@apiDescription_Endpoint_description_here.._//_*_//_*_@apiVersion_1.0.0_//_*_@apiPermission_none_//_*_//_*_@apiParam_{String}_parameters_here.._//_*_//_*_@apiSuccessExample_{json}_Success-Response:_//_*_HTTP/1.1_200_OK_//{_//_//_Insert_the_response_of_the_request_here..._//}_//",
    "name": ""
  },
  {
    "group": "VersionData_//_*_@apiName_findVersionDataById_//_*_//_*_@api_{GET}_/v1/version_data/:id_Endpoint_title_here.._//_*_@apiDescription_Endpoint_description_here.._//_*_//_*_@apiVersion_1.0.0_//_*_@apiPermission_none_//_*_//_*_@apiParam_{String}_parameters_here.._//_*_//_*_@apiSuccessExample_{json}_Success-Response:_//_*_HTTP/1.1_200_OK_//{_//_//_Insert_the_response_of_the_request_here..._//}_//",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/Containers/VersionData/UI/API/Routes/FindVersionDataById.v1.private.php",
    "groupTitle": "VersionData_//_*_@apiName_findVersionDataById_//_*_//_*_@api_{GET}_/v1/version_data/:id_Endpoint_title_here.._//_*_@apiDescription_Endpoint_description_here.._//_*_//_*_@apiVersion_1.0.0_//_*_@apiPermission_none_//_*_//_*_@apiParam_{String}_parameters_here.._//_*_//_*_@apiSuccessExample_{json}_Success-Response:_//_*_HTTP/1.1_200_OK_//{_//_//_Insert_the_response_of_the_request_here..._//}_//",
    "name": ""
  },
  {
    "group": "VersionData_//_*_@apiName_updateVersionData_//_*_//_*_@api_{PATCH}_/v1/version_data/:id_Endpoint_title_here.._//_*_@apiDescription_Endpoint_description_here.._//_*_//_*_@apiVersion_1.0.0_//_*_@apiPermission_none_//_*_//_*_@apiParam_{String}_parameters_here.._//_*_//_*_@apiSuccessExample_{json}_Success-Response:_//_*_HTTP/1.1_200_OK_//{_//_//_Insert_the_response_of_the_request_here..._//}_//",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/Containers/VersionData/UI/API/Routes/UpdateVersionData.v1.private.php",
    "groupTitle": "VersionData_//_*_@apiName_updateVersionData_//_*_//_*_@api_{PATCH}_/v1/version_data/:id_Endpoint_title_here.._//_*_@apiDescription_Endpoint_description_here.._//_*_//_*_@apiVersion_1.0.0_//_*_@apiPermission_none_//_*_//_*_@apiParam_{String}_parameters_here.._//_*_//_*_@apiSuccessExample_{json}_Success-Response:_//_*_HTTP/1.1_200_OK_//{_//_//_Insert_the_response_of_the_request_here..._//}_//",
    "name": ""
  },
  {
    "group": "VersionData",
    "name": "getAllVersionDatas",
    "type": "GET",
    "url": "/v1/version_data",
    "title": "Get all version table",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "students"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // Insert the response of the request here...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/VersionData/UI/API/Routes/GetAllVersionDatas.v1.private.php",
    "groupTitle": "VersionData"
  },
  {
    "group": "Words",
    "name": "createWords",
    "type": "POST",
    "url": "/v1/words",
    "title": "Create_word",
    "description": "<p>This operation will be handle by admin</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>allow to create file only category_id exists in category table</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hiragana",
            "description": "<p>required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alphabet",
            "description": "<p>English character</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chinese_character",
            "description": "<p>Data enter in chinese</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "khmer",
            "description": "<p>data should type in khmer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "example_japanese",
            "description": "<p>sample data format: 愛する&quot;,&quot;私はあなたを愛しています&quot;,&quot;男女の愛&quot;,&quot;親子の愛</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "example_khmer",
            "description": "<p>sample data format: ស្រលាញ់/ ប្រតិព័ន្&quot;,&quot;ខ្ញុំស្រលាញ់អ្នក&quot;,&quot;សេចក្ដីស្រលាញ់រវាងមនុស្សប្រុសនិងមនុស្សស្រី&quot;,&quot;សេចក្ដីស្រលាញរវាងឪពុកម្ដាយនិងកូន</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sound_stored_path",
            "description": "<p>the sound path will be given from front-end (data will be store url will be stored in s3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sound_url",
            "description": "<p>the sound url will be given from front-end</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sound_name",
            "description": "<p>sound name have to the same as word_id this data will be given by front-end</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "copy_right",
            "description": "<p>the data is the form of copy right data</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"data\": {\n  \"object\": \"Words\",\n  \"id\": \"z4pe7dyxp0rvlx8w\",\n  \"version\": 1,\n  \"category_id\": \"1\",\n  \"hiragana\": \"hiragana2syk22j244\",\n  \"alphabet\": \"alphabet2w15ssd1\",\n  \"chinese_character\": \"chinese_characters\",\n  \"khmer\": \"khmersys\",\n  \"example_japanese\": [\n    \"愛する\",\n    \"私はあなたを愛しています\",\n    \"男女の愛\",\n    \"親子の愛\"\n  ],\n  \"example_khmer\": [\n    \"ស្រលាញ់/ ប្រតិព័ន្\",\n    \"ខ្ញុំស្រលាញ់អ្នក\",\n    \"សេចក្ដីស្រលាញ់រវាងមនុស្សប្រុសនិងមនុស្សស្រី\",\n    \"សេចក្ដីស្រលាញរវាងឪពុកម្ដាយនិងកូន\"\n  ],\n  \"sound_name\": \"sound_name\",\n  \"sound_url\": \"sound_url\",\n  \"copy_right\": \"copy_right\",\n  \"category_name\": null,\n  \"created_at\": \"2020-12-26T02:01:10.000000Z\",\n  \"updated_at\": \"2020-12-26T02:01:10.000000Z\",\n  \"real_id\": 8\n  },\n  \"meta\": {\n    \"include\": [\n      \"category\"\n    ],\n    \"custom\": []\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n    \"hiragana\": [\n      \"The hiragana has already been taken.\"\n    ],\n    \"alphabet\": [\n      \"The alphabet has already been taken.\"\n    ],\n    \"chinese_character\": [\n      \"The chinese character has already been taken.\"\n    ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Words/UI/API/Routes/CreateWords.v1.private.php",
    "groupTitle": "Words"
  },
  {
    "group": "Words",
    "name": "deleteAllWords",
    "type": "DELETE",
    "url": "/v1/delete_all_words",
    "title": "delete all words",
    "description": "<p>It will delete all check box words</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id enter the word ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n  \"success\": \"Products Deleted successfully.\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n  {\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n    \"0.id\": [\n      \"The selected 0.id is invalid.\"\n    ],\n    \"1.id\": [\n      \"The selected 1.id is invalid.\"\n    ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Words/UI/API/Routes/DeleteAll.v1.private.php",
    "groupTitle": "Words"
  },
  {
    "group": "Words",
    "name": "deleteWords",
    "type": "DELETE",
    "url": "/v1/words/:id",
    "title": "delete",
    "description": "<p>This endpoint handle two operation, single delete word(url parameter) and multiple delete word (json array)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "word_id",
            "description": "<p>required: this data will be called when there is no json body provided</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "array_word_id",
            "description": "<p>data_json_array</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  0 or 1\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 417Expectation Failed\n  {\n      App\\Ship\\Exceptions\\DeleteResourceFailedException: Failed to delete Resource.\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Words/UI/API/Routes/DeleteWords.v1.private.php",
    "groupTitle": "Words"
  },
  {
    "group": "Words",
    "name": "findWordsById",
    "type": "GET",
    "url": "/v1/words/:hashed_id",
    "title": "Get_word_by_id",
    "description": "<p>Admin have to provide hashed_id in order to retrieve any words</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hashed_id",
            "description": "<p>unique hashed_id of the word</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n    \"object\": \"Words\",\n    \"id\": \"velz7g5ok0ko4qx9\",\n    \"version\": 3,\n    \"category_id\": 1,\n    \"hiragana\": \"hiragana2syk22j24455\",\n    \"alphabet\": \"alphabet2w15ssd1\",\n    \"chinese_character\": \"chinese_characters\",\n    \"khmer\": \"khmersys\",\n    \"example_japanese\": [\n        \"愛する\",\n        \"私はあなたを愛しています\",\n        \"男女の愛\",\n        \"親子の愛\"\n    ],\n    \"example_khmer\": [\n        \"ស្រលាញ់/ ប្រតិព័ន្\",\n        \"ខ្ញុំស្រលាញ់អ្នក\",\n        \"សេចក្ដីស្រលាញ់រវាងមនុស្សប្រុសនិងមនុស្សស្រី\",\n        \"សេចក្ដីស្រលាញរវាងឪពុកម្ដាយនិងកូន\"\n    ],\n    \"sound_name\": \"sound_name\",\n    \"sound_url\": \"sound_url\",\n    \"copy_right\": \"copy_right\",\n    \"category_name\": null,\n    \"created_at\": \"2020-12-26T02:13:12.000000Z\",\n    \"updated_at\": \"2020-12-26T02:13:12.000000Z\",\n    \"real_id\": 10\n    },\n    \"meta\": {\n    \"include\": [\n      \"category\"\n    ],\n    \"custom\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Words/UI/API/Routes/FindWordsById.v1.private.php",
    "groupTitle": "Words"
  },
  {
    "group": "Words",
    "name": "getAllWords",
    "type": "GET",
    "url": "/v1/words",
    "title": "GetAllWords.",
    "description": "<p>retrieve all word per page base on paginate</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin, students"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "none",
            "description": "<p>none</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n    \"object\": \"Words\",\n    \"id\": \"velz7g5ok0ko4qx9\",\n    \"version\": 3,\n    \"category_id\": 1,\n    \"hiragana\": \"hiragana2syk22j24455\",\n    \"alphabet\": \"alphabet2w15ssd1\",\n    \"chinese_character\": \"chinese_characters\",\n    \"khmer\": \"khmersys\",\n    \"example_japanese\": [\n      \"愛する\",\n      \"私はあなたを愛しています\",\n      \"男女の愛\",\n      \"親子の愛\"\n    ],\n    \"example_khmer\": [\n      \"ស្រលាញ់/ ប្រតិព័ន្\",\n      \"ខ្ញុំស្រលាញ់អ្នក\",\n      \"សេចក្ដីស្រលាញ់រវាងមនុស្សប្រុសនិងមនុស្សស្រី\",\n      \"សេចក្ដីស្រលាញរវាងឪពុកម្ដាយនិងកូន\"\n    ],\n    \"sound_name\": \"sound_name\",\n    \"sound_url\": \"sound_url\",\n    \"copy_right\": \"copy_right\",\n    \"category_name\": null,\n    \"created_at\": \"2020-12-26T02:13:12.000000Z\",\n    \"updated_at\": \"2020-12-26T02:13:12.000000Z\",\n    \"real_id\": 10\n    },\n  \"meta\": {\n    \"include\": [\n      \"category\"\n    ],\n    \"custom\": [],\n    \"pagination\": {\n      \"total\": 5,\n      \"count\": 5,\n      \"per_page\": 10,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": {}\n    }\n}\n],",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Words/UI/API/Routes/GetAllWords.v1.private.php",
    "groupTitle": "Words"
  },
  {
    "group": "Words",
    "name": "updateWords",
    "type": "POST",
    "url": "/v1/words/:hashed_id?_method=patch",
    "title": "update",
    "description": "<p>At least one field have to change</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>required: allow to create file only category_id exists in category table</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hiragana",
            "description": "<p>Japanese character</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alphabet",
            "description": "<p>English character</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chinese_character",
            "description": "<p>Data enter in chinese</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "khmer",
            "description": "<p>data should type in khmer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "example_japanese",
            "description": "<p>sample data format: 愛する&quot;,&quot;私はあなたを愛しています&quot;,&quot;男女の愛&quot;,&quot;親子の愛</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "example_khmer",
            "description": "<p>sample data format: ស្រលាញ់/ ប្រតិព័ន្&quot;,&quot;ខ្ញុំស្រលាញ់អ្នក&quot;,&quot;សេចក្ដីស្រលាញ់រវាងមនុស្សប្រុសនិងមនុស្សស្រី&quot;,&quot;សេចក្ដីស្រលាញរវាងឪពុកម្ដាយនិងកូន</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sound_stored_path",
            "description": "<p>the sound path will be given from front-end (data will be store url will be stored in s3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sound_url",
            "description": "<p>the sound url will be given from front-end</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sound_name",
            "description": "<p>sound name have to the same as word_id this data will be given by front-end</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "copy_right",
            "description": "<p>the data is the form of copy right data</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n  \"object\": \"Words\",\n  \"id\": \"pmzjbo5mx0ewqklr\",\n  \"version\": null,\n  \"category_id\": \"1\",\n  \"hiragana\": \"hiragana\",\n  \"alphabet\": \"alphabet\",\n  \"chinese_character\": \"chinese_character\",\n  \"khmer\": \"khmer\",\n  \"example_japanese\": [\n    \"愛する\",\n    \"私はあなたを愛しています\",\n    \"男女の愛\",\n    \"親子の愛\"\n  ],\n  \"example_khmer\": [\n    \"ស្រលាញ់/ ប្រតិព័ន្\",\n    \"ខ្ញុំស្រលាញ់អ្នក\",\n    \"សេចក្ដីស្រលាញ់រវាងមនុស្សប្រុសនិងមនុស្សស្រី\",\n    \"សេចក្ដីស្រលាញរវាងឪពុកម្ដាយនិងកូន\"\n  ],\n  \"sound_name\": null,\n  \"sound_url\": null,\n  \"copy_right\": null,\n  \"category_name\": null,\n  \"created_at\": \"2020-12-26T02:12:59.000000Z\",\n  \"updated_at\": \"2020-12-26T02:13:26.000000Z\",\n  \"real_id\": 9\n  },\n  \"meta\": {\n  \"include\": [\n    \"category\"\n  ],\n  \"custom\": []\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"message\": \"The given data was invalid.\",\n  \"errors\": {\n  \"category_id\": [\n     \"The category id has already been taken.\"\n  ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Words/UI/API/Routes/UpdateWords.v1.private.php",
    "groupTitle": "Words"
  },
  {
    "group": "admin_dashboard",
    "name": "GetAllAdmins",
    "type": "GET",
    "url": "/v1/admins",
    "title": "GetAllAdmins",
    "description": "<p>this system has only one admin</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>None</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"data\": [\n  {\n      \"object\": \"User\",\n      \"id\": \"azkvml597yxe8b9j\",\n      \"name\": \"Super Admin\",\n      \"email\": \"soemsamrach15@kit.edu.kh\",\n      \"confirmed\": true,\n      \"nickname\": null,\n      \"gender\": null,\n      \"birth\": null,\n      \"status\": \"deactivate\",\n      \"social_auth_provider\": null,\n      \"social_id\": null,\n      \"social_avatar\": {\n        \"avatar\": null,\n        \"original\": null\n      },\n      \"created_at\": \"2020-12-25T02:31:26.000000Z\",\n      \"updated_at\": \"2020-12-25T03:27:31.000000Z\",\n      \"readable_created_at\": \"2 days ago\",\n      \"readable_updated_at\": \"2 days ago\",\n      \"real_id\": 1,\n      \"deleted_at\": null\n    }\n  ],\n  \"meta\": {\n    \"include\": [\n      \"roles\"\n    ],\n    \"custom\": [],\n    \"pagination\": {\n        \"total\": 1,\n        \"count\": 1,\n        \"per_page\": 10,\n        \"current_page\": 1,\n        \"total_pages\": 1,\n        \"links\": {}\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/GetAllAdmins.v1.private.php",
    "groupTitle": "admin_dashboard"
  },
  {
    "group": "admin_dashboard",
    "name": "GetAllUsers",
    "type": "GET",
    "url": "/v1/users",
    "title": "GetAllUsers",
    "description": "<p>This will list out all users in the system include admin and clients</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>None</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"object\": \"User\",\n      \"id\": \"azkvml597yxe8b9j\",\n      \"name\": \"Super Admin\",\n      \"email\": \"soemsamrach15@kit.edu.kh\",\n      \"confirmed\": true,\n      \"nickname\": null,\n      \"gender\": null,\n      \"birth\": null,\n      \"status\": \"deactivate\",\n      \"social_auth_provider\": null,\n      \"social_id\": null,\n      \"social_avatar\": {\n      \"avatar\": null,\n      \"original\": null\n      },\n      \"created_at\": \"2020-12-25T02:31:26.000000Z\",\n      \"updated_at\": \"2020-12-25T03:27:31.000000Z\",\n      \"readable_created_at\": \"2 days ago\",\n      \"readable_updated_at\": \"2 days ago\",\n      \"real_id\": 1,\n      \"deleted_at\": null\n     }\n    ],\n  \"meta\": {\n    \"include\": [\n      \"roles\"\n    ],\n    \"custom\": [],\n      \"pagination\": {\n        \"total\": 1,\n        \"count\": 1,\n        \"per_page\": 10,\n        \"current_page\": 1,\n        \"total_pages\": 1,\n        \"links\": {}\n      }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/GetAllUsers.v1.private.php",
    "groupTitle": "admin_dashboard"
  },
  {
    "group": "admin_manage_users",
    "name": "Get_all_clients_from_the_system",
    "type": "GET",
    "url": "/v1/clients",
    "title": "get all clients",
    "description": "<p>It will list only user register from Facebook</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "none",
            "description": "<p>none</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  return it will list out all clients registered from Facebook\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/GetAllClients.v1.private.php",
    "groupTitle": "admin_manage_users"
  },
  {
    "group": "admin_manage_users",
    "name": "activate_or_deactivate_users",
    "type": "GET",
    "url": "/v1/users/hashed_user_id",
    "title": "activate_deactivate user",
    "description": "<p>deactivate user cannot do anything in the system</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>active or inactive</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n return success response\n}",
          "type": "json"
        },
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"message\": \"User Not Found.\",\n  \"exception\": \"App\\\\Ship\\\\Exceptions\\\\NotFoundException\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/UpdateUser.v1.private.php",
    "groupTitle": "admin_manage_users"
  }
] });
