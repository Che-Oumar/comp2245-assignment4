window.onload = function() {
    const result = document.getElementById("result");

    document.getElementById("lookup").addEventListener("click", function() {
        fetchData("countries");
    });

    document.getElementById("lookup-cities").addEventListener("click", function() {
        fetchData("cities");
    });

    function fetchData(type) {
        const country = document.getElementById("country").value.trim();

        let url = "world.php?country=" + encodeURIComponent(country);

        if (type === "cities") {
            url += "&lookup=cities";
        }

        fetch(url)
            .then(resp => resp.text())
            .then(data => {
                result.innerHTML = data;
            })
            .catch(err => {
                result.innerHTML = "<p>Error fetching data.</p>";
            });
    }
};
