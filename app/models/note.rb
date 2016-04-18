class Note
  include Mongoid::Document
  
  field :title, :type => String
  field :content, :type => String
  field :note_type, :type => String #enumeration (Text|List)
end