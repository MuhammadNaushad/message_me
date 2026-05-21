import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    $(this.element).dropdown();
  }

  disconnect() {
    $(this.element).dropdown("destroy");
  }
}
