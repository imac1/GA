import "./styles/App.css";
import movieArray from "./data/movies.json";
import Movie from "./Components/Movie";
import Genre from "./Components/Genre";

const App = () => {
	return (
		<div className="grid grid-cols-4 gap-2">
			{movieArray.map((movie) => (
				<div key={movie.id} className="p-4 border rounded">
					<Movie title={movie.title} image={movie.poster_path} />
					<div className="grid grid-cols-3 gap-4    ">
						{movie.genres.map((genre) => (
							<Genre key={genre.id} name={genre.name} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};
export default App;