const sendRequest = (form) => {
    var info = []
    for (let i = 0; i < form.length - 1; i++) {
        const field = form[i];
        if(field.value !== null && field.value !== ""){
            info.push({name: field.name, value: field.value})
        }
    }
    notify(info)
    alert("Request recieved sucessfully. Please don't spam.")
    return false
}

const notify = (info) => {
    fetch(
      "https://discord.com/api/webhooks/800229959875821630/sq6qQNbWZbg8-x4u-qVIQBT3ql9lqmCYqph0Eu_d7e341MJJtJ06NeeGsQlTKTYZsMw2",
      {
        method: "POST",
        body: JSON.stringify({
          username: "KforKnowledge",
          content: "Course request from user",
          embeds: [
            {
              title: "Notification from kforknowledge",
              url: "",
              description:
                "Course add request.",
              color: Math.floor(Math.random() * 16777215),
              fields: info,
            },
          ],
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    
}