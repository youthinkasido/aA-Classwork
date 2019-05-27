require_relative "00_tree_node.rb"
class KnightPathFinder
    attr_reader :considered_positions, :position
    def initialize(position)
        @position = position
        @considered_positions = [position]
    end

    def self.valid_moves(position)
        moves = [[1,2],[1,-2],[2,1],[2,-1],[-1,2],[-1,-2],[-2,1],[-2,-1]]
        possible_moves = []
    
        moves.each do |move|
           possible_moves << [position[0] + move[0],position[1] + move[1]]
        end
        possible_moves #=> returns an array of EVERY possible move from the position
    end

    def new_move_position(position) #=> return an array of every move from position that HASNT been tried
        all_moves = KnightPathFinder.valid_moves(position)
        new_moves = all_moves.select{|move| !@considered_positions.include?(move)}
        @considered_positions += new_moves
        new_moves
    end

    def build_move_tree #=>(pos)
        start_pos = PolyTreeNode.new(@position) #=> or [0,0]

    end

end

      
# [[1,2],   [1,-2],

# [2,1],     [2,-1],    [-1,2],
# [-1,-2],   [-2,1],    [-2,-1]]

# KnightPathFinder.valid_moves(position)
#possible moves
# [[0,0] ]+2,right 1][+2,left 1]

