const currentDateParagraph = document.getElementById("current-date") as HTMLParagraphElement;
const dateOptionsSelectElement = document.getElementById("date-options") as HTMLSelectElement;

const date = new Date();
const day: number = date.getDate();
const month: number = date.getMonth() + 1;
const year: number = date.getFullYear();
const hours: number = date.getHours();
const minutes: number = date.getMinutes();

const formattedDate: string = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", ():void => {
    switch (dateOptionsSelectElement.value) {
      case "yyyy-mm-dd":
        currentDateParagraph.textContent = formattedDate
          .split("-")
          .reverse()
          .join("-");
        break;
      case "mm-dd-yyyy-h-mm":
        currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
        break;
      default:
        currentDateParagraph.textContent = formattedDate;
    }
  });