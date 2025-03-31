export interface Icon {
    icon_id: number;
    published_at: string;
    raster_sizes: {
        formats:
        {
            format: string,
            preview_url: string,
            download_url: string,
        }[],
    }[];
}
