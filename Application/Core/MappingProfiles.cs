using System;

using AutoMapper;
using Domain;


namespace Application.Core;

public class MappingProfiles : Profile
{
   public MappingProfiles()
    {
        // Copiază toate proprietățile, ignorând id-ul
        CreateMap<Activity, Activity>()
            .ForMember(dest => dest.id, opt => opt.Ignore());
    }
}
