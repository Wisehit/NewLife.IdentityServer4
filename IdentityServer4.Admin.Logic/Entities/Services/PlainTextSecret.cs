﻿





using System;

namespace IdentityServer4.Admin.Logic.Entities.Services
{
  public class PlainTextSecret
  {
    public int Id { get; set; }

    public string Type { get; set; }

    public string Value { get; set; }

    public string Description { get; set; }

    public DateTime? Expiration { get; set; }
  }
}
