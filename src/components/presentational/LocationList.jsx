import { LocationItem } from "./LocationItem";

export const LocationList = ({ locations, isLoading, error }) => {
    if (isLoading) return <div className="loading">Loading locations...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!locations?.length) return <div className="no-data">No locations found</div>;

    return (
        <div className="locations-list">
            {locations.map(location => (
                <LocationItem key={location.id} location={location} />
            ))}
        </div>
    );
};