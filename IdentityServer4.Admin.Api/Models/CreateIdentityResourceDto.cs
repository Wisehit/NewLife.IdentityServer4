﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IdentityServer4.Admin.Api.Models
{
    public class CreateIdentityResourceDto
    {
        [Required(AllowEmptyStrings = false)]
        public string Name { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string DisplayName { get; set; }

        public string Description { get; set; }

        public List<string> AllowedClaims { get; set; }
    }
}