function build(id) {
  $.getJSON("packages.json", function(json) {
    $("#output").html(json.id.data);
  });
};

// $("#pack0").on("click", function() {
//   $.getJSON("packages.json", function(select) {
//     $("#output").html(select.package0.data);
//   });
// });
//
// $("#pack1").on("click", function() {
//   $.getJSON("packages.json", function(select) {
//     $("#output").html(select.package1.data);
//   });
// });
