const { Course } = require("../../db");

const getCourses = async () => {
    const result = await Course.findAll();

    const resultMap = await result?.map((e) => {
        return {
            id: e.id,
            name: e.name,
            tags: e.tags,
            level: e.level,
            duration: e.duration,
            price: e.price,
            description: e.description,
            imageSrc: e.imageSrc,
            videoSrc: e.videoSrc,
        };
    });
    return resultMap;
};

const getCoursesWithFilters = async ({
    name = '',
    level = 'all',
    minDuration = "all",
    maxDuration = 'all',
    minPrice = "all",
    maxPrice = "all",
    sortName = "default",
    sortPrice = "default",
    sortDuration = "default"
}) => {
    let courses = await getCourses();

    if (name) {
        courses = courses.filter((c) =>
            c.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (level !== "all") {
        courses = courses.filter((c) => c.level === level);
    }

    if (minDuration !== 'all') {
        courses = courses.filter((c) => c.duration >= minDuration)
    }

    if (maxDuration !== 'all') {
        courses = courses.filter((c) => c.duration <= maxDuration)
    }

    if (minPrice !== 'all') {
        courses = courses.filter((c) => Number(c.price) >= minPrice)
    }

    if (maxPrice !== 'all') {
        courses = courses.filter((c) => Number(c.price) <= maxPrice)
    }

    if (sortName !== "default") {
        courses = courses.sort((a, b) => {
            if (a.name > b.name) {
                return sortName === "asc" ? 1 : -1
            }
            if (a.name < b.name) {
                return sortName === "asc" ? -1 : 1
            }
            return 0
        })
    }

    if (sortPrice !== "default") {
        courses = courses.sort((a, b) => {
            if (a.price > b.price) {
                return sortPrice === "asc" ? 1 : -1
            }
            if (a.price < b.price) {
                return sortName === "asc" ? -1 : 1
            }
            return 0
        })
    }

    if (sortDuration !== "default") {
        courses = courses.sort((a, b) => {
            if (a.duration > b.duration) {
                return sortDuration === "asc" ? 1 : -1
            }
            if (a.price < b.price) {
                return sortDuration === "asc" ? -1 : 1
            }
            return 0
        })
    }

    return courses;
}


module.exports = {
    getCourses,
    getCoursesWithFilters,
};
