using System;
using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController() : BaseApiController
{

  [HttpGet]
  public async Task<ActionResult<List<Activity>>> GetActivities()
  {
    return await Mediator.Send(new GetActivitiesList.Query());

  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Activity>> GetActivityDetail(string id)
  {
    return await Mediator.Send(new GetActivityDetails.Query { Id = id });
  }


  [HttpPost]
  public async Task<ActionResult<Activity>> CreateActivity(Activity activity)
  {
    var id = await Mediator.Send(new CreateActivity.Command { Activity = activity });
    return Ok(id);
  }


  [HttpPut("{id}")]
  public async Task<ActionResult> EditActivity(Guid id, Activity activity)
  {
    // Asigură id-ul corect din URL
    activity.id = id.ToString();

    await Mediator.Send(new EditActivity.Command { Activity = activity });

    return NoContent();
  }


  [HttpDelete("{id}")]
  public async Task<ActionResult> DeleteActivity(string id)
  {

    await Mediator.Send(new DeleteActivity.Command{ id = id});

    return Ok();
  }

}
