import { EpisodeItem } from "./EpisodeItem";

export const EpisodeList = ({ episodes, isLoading, error }) => {
    if (isLoading) return <div className="loading">Loading episodes...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!episodes?.length) return <div className="no-data">No episodes found</div>;

    return (
        <div className="episodes-list">
            {episodes.map(episode => (
                <EpisodeItem key={episode.id} episode={episode} />
            ))}
        </div>
    );
};