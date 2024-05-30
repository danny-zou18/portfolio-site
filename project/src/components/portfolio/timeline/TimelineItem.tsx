import "./Timeline.css";

function LightenDarkenColor(col: string,amt: number) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;
    
    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}


interface TimelineItemProp {
  data: {
    text: string;
    startdate: string;
    enddate: string;
    category: {
      tag: string;
      color: string;
    };
    link?: {
      url: string;
      text: string;
    } | null;
    skills?: string[] | null;
  };
}

const TimelineItem: React.FC<TimelineItemProp> = ({ data }) => {
  return (
    <div
      className="
      timeline-item text-background
    "
    >
      <div className="timeline-item-content relative bg-card">
        <span
          className="px-2 rounded-md mb-3 text-xs"
          style={{ background: data.category.color }}
        >
          {data.category.tag}
        </span>

        <time className="text-xs text-accent">
          {`${data.startdate} - ${data.enddate}`}
        </time>
        <p className="py-4 text-sm">{data.text}</p>
        <div className="skills flex flex-wrap gap-1 w-[50%]">
          {data.skills &&
            data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-1 rounded-md text-xs "
                style={{ background: LightenDarkenColor(data.category.color, 50)}}
              >
                {skill}
              </span>
            ))}
        </div>
        {data.link && (
          <a
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline"
          >
            {`${data.link.text} ►`}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
};

export default TimelineItem;
